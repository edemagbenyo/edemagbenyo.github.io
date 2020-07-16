import React from "react";
import "../styles/About.scss";
const About = () => {
  return (
    <div className="about-container">
      <div className="about-contact">
        <div className="about-query">
          <span>About my skills</span>
          <h2>
            I take much delight in writing clean code, and scalable applications.
          </h2>
          <p>I am currently looking for new opportunities.</p>
          <a href="/">Download Resume</a>
        </div>
        <div className="about-info">
          <div className="about-skills">
            <h2>Backend</h2>
            <p>
              I have built several applications using the following technologies.
            </p>
            <button>PHP(Laravel)</button>
            <button>Ruby(Rails)</button>
            <button>JS(Node.Js)</button>
          </div>
          <div className="about-skills">
            <h2>Front-end</h2>
            <p>
              I can craft beautiful, responsive and fast applications using the following frameworks.
            </p>
            <button>React(JS|Native)</button>
            <button>Vue.Js</button>
          </div>
          <div className="about-skills">
            <h2>Dev-Ops</h2>
            <p>
              I love workflow automation and application continuous delivery using the following technologies.
            </p>
            <button>Github Actions</button>
            <button>Docker</button>
            <button>AWS/Firebase</button>
          </div>
        </div>
      </div>

    </div>
  );
};
export default About;
