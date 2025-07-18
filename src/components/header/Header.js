import React, { useState } from "react";
import "./header.css";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header>
      <div className="container header__container">
        <div className="header__logo">
          <Link to="home" smooth={true} duration={500} onClick={() => setIsNavOpen(false)}>
            Mohammad Ausaf Shah
          </Link>
        </div>

        <nav className={`header__nav ${isNavOpen ? "open" : ""}`}>
          <ul className="header__menu">
            <li>
              <Link to="home" smooth={true} duration={500} onClick={toggleNav}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500} onClick={toggleNav}>
                About
              </Link>
            </li>
            <li>
              <Link to="experience" smooth={true} duration={500} onClick={toggleNav}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={500} onClick={toggleNav}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500} onClick={toggleNav}>
                Contact
              </Link>
            </li>
          </ul>
          <button className="nav__toggle-btn nav__close-btn" onClick={toggleNav}>
            <FaTimes />
          </button>
        </nav>

        <button className="nav__toggle-btn" onClick={toggleNav}>
          <FaBars />
        </button>
      </div>
    </header>
  );
};

export default Header;
