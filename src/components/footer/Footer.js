import React from "react";
import "./footer.css";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        {/* Column 1: About */}
        <div className="footer__col footer__about">
          <h3>Mohammad Ausaf Shah</h3>
          <p>Full Stack Developer passionate about creating amazing digital experiences and solving complex problems through code.</p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer__col">
          <h4>Quick Links</h4>
          <ul className="permalinks">
            <li>
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li>
              <Link to="experience" smooth={true} duration={500}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={500}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Connect */}
        <div className="footer__col">
          <h4>Connect</h4>
          <div className="footer__socials">
            <a href="https://github.com/ausafshah18" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/mohammad-ausaf-shah-4a2606185/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:ausafshah18@gmail.com">
              <MdEmail />
            </a>
          </div>
        </div>
      </div>

      <div className="footer__copyright">
        <small>&copy; {new Date().getFullYear()} Built and maintained by Mohammad Ausaf Shah. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
