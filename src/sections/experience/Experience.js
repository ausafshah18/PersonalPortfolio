import React, { useEffect, useRef } from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import VerizonLogo from "../../assets/Verizon-Logo.jpg";
import BooksAppLogo from "../../assets/BooksApp_Logo.png";

const experiences = [
  {
    title: "Engineer I Software Development",
    company: "Verizon",
    logo: VerizonLogo,
    duration: "July 2024 - Current",
    location: "Chennai, India",
    details: ["Developed a CSRF filter in the Spring Boot production backend, reducing CORS issues to 0%.", "Improved business logic across multiple endpoints in the production backend.", "Built a high-performance React Native mobile app POC for the My Verizon App, educing page load time by 1.11s compared to production.", "Investigated Kibana responses for UI requests spanning 47 services and implemented backend framework changes that resolved missing values in 841 endpoints.", "Built various full-stack features leveraging GitLab and Jira APIs in a MERN-based tool called Platform Edge, boosting the Platform Team’s efficiency by 15%.", "Wrote unit tests with JUnit and Mockito, increasing code coverage to 95%."]
  },
  {
    title: "Student intern",
    company: "Verizon",
    logo: VerizonLogo,
    duration: "February 2024 - July 2024",
    location: "Chennai, India",
    details: ["Contributed to the development of a new web application feature using Node.js.", "Built dynamic UI tabs in React.js to display merge request data in the MERN-based tool, Platform Edge."]
  },
  {
    title: "Web Development Internship",
    company: "BooksApp",
    logo: BooksAppLogo,
    duration: "February 2022 - March 2022",
    location: "Remote",
    details: ["Developed a landing page for a Dubai based Cargo company using HTML, CSS, JavaScript and Bootstrap.", "Worked on the Navbar and Different Sections of the Website."]
  }
];

const Experience = () => {
  const experienceCards = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.3
      }
    );

    const currentCards = experienceCards.current;

    currentCards.forEach(card => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      currentCards.forEach(card => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, []);

  return (
    <section id="experience">
      <h5>My professional journey</h5>
      <h2>Experience</h2>

      <div className="container experience__container">
        {experiences.map((exp, index) => (
          <article className="experience__card" key={index} ref={el => (experienceCards.current[index] = el)}>
            <div className="experience__header">
              <h3>{exp.title}</h3>
              <img src={exp.logo} alt={`${exp.company} logo`} className="experience__logo" />
            </div>
            <div className="experience__meta">
              <span>{exp.duration}</span>
              <span>{exp.location}</span>
            </div>
            <ul className="experience__details">
              {exp.details.map((detail, i) => (
                <li key={i}>
                  <BsPatchCheckFill className="experience__details-icon" />
                  <p>{detail}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
