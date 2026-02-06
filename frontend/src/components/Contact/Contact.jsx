import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const [loading, setLoading] = React.useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    if (loading) return;
    setLoading(true);

    const form = event.target;

    const { name, email, phone, message } = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      message: form.message.value,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, message }),
      });

      const contentType = response.headers.get("content-type");
      let data = {};

      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        throw new Error(
          `Server returned ${response.status} with non-JSON response`,
        );
      }

      if (response.ok) {
        setResult(data.message || "Form submitted successfully!");
        form.reset();
      } else {
        setResult(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission failed:", error);
      setResult("Connection failed. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="" />
        </h3>
        <p>
          🌴 We would love to hear from you! Reach out with questions about
          diving, desert safaris, or planning your perfect getaway in Sharm El
          Sheikh. Your dream trip starts with a message.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" /> info@sharmtours.com
          </li>
          <li>
            <img src={phone_icon} alt="" /> 0209858903
          </li>
          <li>
            <img src={location_icon} alt="" /> 120 Queens Road, London
          </li>
        </ul>
      </div>

      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />

          <label>Your email address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />

          <label>Your Whatsapp number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
            pattern="[0-9+]+"
            title="Numbers only"
          />

          <label>Write your messages here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>

          <button type="submit" className="btn dark-btn" disabled={loading}>
            {loading ? "Sending..." : "Submit now"}{" "}
            <img src={white_arrow} alt="" />
          </button>
        </form>

        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
