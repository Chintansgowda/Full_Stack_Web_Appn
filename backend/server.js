const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mysql = require("mysql2");
const cors = require("cors");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

app.get("/live", (req, res) => {
  res.sendStatus(200);
});

app.get("/ready", async (req, res) => {
  try {
    await db.promise().query("SELECT 1");
    res.sendStatus(200);
  } catch (err) {
    console.error("Readiness check failed:", err.message);
    res.status(503).json({ error: "DB not reachable" });
  }
});

app.post("/api/contact", (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res
      .status(400)
      .json({ error: "Please provide a valid email address." });
  }

  const sql =
    "INSERT INTO contacts (name, email, phone, message) VALUES (?, ?, ?, ?)";

  db.query(sql, [name, email, phone, message], (err, result) => {
    if (err) {
      console.error("Full DB error details:", err);

      if (err.code === "ER_DUP_ENTRY") {
        if (err.message.includes("email")) {
          return res.status(400).json({ error: "Email already submitted." });
        }
        if (err.message.includes("phone")) {
          return res
            .status(400)
            .json({ error: "Phone number already submitted." });
        }
      }

      return res.status(500).json({ error: "Failed to save message." });
    }

    res.status(200).json({ message: "Form submitted successfully!" });
  });
});

app.use((req, res) => {
  res.status(404).send("Route not found");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


