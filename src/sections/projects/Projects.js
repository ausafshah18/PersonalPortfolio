import React from "react";
import "./projects.css";

const projectsData = [
  {
    image: require("../../assets/findash.png"),
    title: "FinDash",
    description: "A full-stack finance dashboard to visualize revenue, expenses, profit, product pricing, and transactions through interactive charts and tables, with a predictions page leveraging machine learning to forecast next year’s revenue.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose"],
    github: "https://github.com/ausafshah18/Finance-Backend"
  },
  {
    image: require("../../assets/MyChat.png"),
    title: "MyChat Mobile App",
    description: "A full-stack mobile chat app with user authentication, profile photo upload, real-time messaging, and push notifications.",
    tags: ["Flutter", "Dart", "Firebase", "Firestore database"],
    github: "https://github.com/ausafshah18/Chatting-Flutter-App"
  },
  {
    image: require("../../assets/shopping.png"),
    title: "Shopping List Mobile App",
    description: "A full-stack grocery list app where users can add items with categories and quantities, and manage them with intuitive swipe-to-delete interactions.",
    tags: ["Flutter", "Dart", "Firebase", "Firestore database"],
    github: "https://github.com/ausafshah18/ShoppingList-Flutter-App"
  }
];

const Projects = () => {
  return (
    <section id="projects">
      <h5>A showcase of my recent work that demonstrates my skills and creativity</h5>
      <h2>Projects</h2>

      <div className="container projects__container">
        {projectsData.map((project, index) => (
          <article key={index} className="project__item">
            <div className="project__item-image">
              <img src={project.image} alt={project.title} />
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project__item-tags">
              {project.tags.map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
            </div>
            <div className="project__item-cta">
              <a href={project.github} className="btn" target="_blank" rel="noreferrer">
                Link &lt;/&gt;
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
