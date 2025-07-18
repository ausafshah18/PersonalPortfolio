import React from "react";
import Header from "./components/header/Header";
import Hero from "./sections/hero/Hero";
import About from "./sections/about/About";
import Experience from "./sections/experience/Experience";
import Projects from "./sections/projects/Projects";
import Contact from "./sections/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
