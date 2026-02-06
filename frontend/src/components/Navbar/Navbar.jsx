import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import menu_icon from "../../assets/menu-icon.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="" className="logo" />
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          {" "}
          <Link
            to="hero"
            smooth={true}
            offset={0}
            duration={500}
            className="nav-link"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="things-we-do"
            smooth={true}
            offset={-400}
            duration={500}
            className="nav-link"
          >
            Things we do
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            offset={-250}
            duration={500}
            className="nav-link"
          >
            About us
          </Link>
        </li>
        <li>
          <Link
            to="photo-gallery"
            smooth={true}
            offset={-250}
            duration={500}
            className="nav-link"
          >
            Photo gallery
          </Link>
        </li>
        <li>
          <Link
            to="testimonials"
            smooth={true}
            offset={-250}
            duration={500}
            className="nav-link"
          >
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            offset={-250}
            duration={500}
            className="nav-link"
            /* button 
            className="btn" */
          >
            Contact us
          </Link>
        </li>
      </ul>
      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
