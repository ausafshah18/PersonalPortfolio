import React from "react";
import "./hero.css";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero__container">
        <div className="hero__content">
          <h1>
            Hi, I'm <span>Mohammad Ausaf Shah</span>
          </h1>
          <h2>Full Stack Developer & Software Engineer</h2>
          <p>A 2024 batch B.Tech CSE graduate from the SRM Institute of Science And Technology, Kattankulathur, Tamil nadu, India. I am currently working as an Engineer I Software Development at Verizon.</p>
          <div className="hero__cta">
            <Link to="contact" smooth={true} duration={500} className="btn btn-primary">
              Get in Touch
            </Link>
            <a href="/resume.pdf" download className="btn">
              Download Resume
            </a>
          </div>
          <div className="hero__socials">
            <a href="https://www.linkedin.com/in/mohammad-ausaf-shah-4a2606185/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/ausafshah18" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            {/* <a href="https://example.com" target="_blank" rel="noreferrer">
              <FaFileAlt />
            </a> */}
          </div>
        </div>
        <div className="hero__image">
          <div className="hero__image-bg">
            <img src={require("../../assets/Personal_photo.jpg")} alt="DP_Image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
