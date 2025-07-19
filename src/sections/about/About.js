import React from "react";
import "./about.css";
import { FaCode, FaServer, FaLightbulb, FaMobileAlt } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know more</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__content">
          <p>I'm a passionate full-stack developer with strong foundations. My journey in software development has spanned full-stack web and mobile applications, with a growing interest in building AI-integrated solutions.</p>
          <p>I’m driven by a desire to use technology to build meaningful, reliable products that solve real problems and create value for people. I'm always eager to take on new challenges and collaborate with individuals from diverse cultures and backgrounds.</p>
        </div>

        <div className="about__cards">
          <article className="about__card">
            <FaCode className="about__icon" />
            <h3>Frontend Development</h3>
            <small>Building responsive and interactive user interfaces</small>
            <ul>
              <li>React</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </article>

          <article className="about__card">
            <FaServer className="about__icon" />
            <h3>Backend Development</h3>
            <small>Creating robust applications</small>
            <ul>
              <li>Node.js</li>
              <li>Express</li>
              <li>Springboot</li>
              <li>Spring</li>
              <li>Spring Reactive (WebFlux)</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>Firebase</li>
            </ul>
          </article>

          <article className="about__card">
            <FaMobileAlt className="about__icon" />
            <h3>Mobile App Development</h3>
            <small>Designing and building robust mobile applications</small>
            <ul>
              <li>React Native</li>
              <li>Flutter</li>
              <li>Dart</li>
            </ul>
          </article>

          <article className="about__card">
            <FaLightbulb className="about__icon" />
            <h3>Artificial Intelligence</h3>
            <small>Harnessing the power of AI to solve problems with intelligent solutions</small>
            <ul>
              <li>TensorFlow</li>
              <li>Scikit-learn</li>
              <li>NumPy</li>
              <li>Pandas</li>
              <li>OpenCV</li>
              <li>Matplotlib</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
