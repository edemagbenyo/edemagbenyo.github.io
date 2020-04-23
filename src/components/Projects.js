import React from "react";
import "./Projects.scss";
import Covid from "../assets/covid.png";

function Projects() {
  return (
    <div className="projects-container">
      <div className="left">
        <div className="projects-intro">
          <span>Portfolio</span>
          <h2>Some of my projects</h2>
          <p>Here are some of my notable projects.</p>
        </div>
        <div className="project">
          <div className="title">
            <h2>Covid-19 Tracker.</h2>
          </div>
          <div className="skills">
            <span>Vanilla JS, ReactJS</span>
          </div>
          <div className="screenshot">
            <img src={Covid} alt="Covid 19 Screenshot" />
          </div>
        </div>
      </div>
      <div className="right">
        <div className="project">
          <div className="title">
            <h2>Friender(Facebook like )</h2>
          </div>
          <div className="skills">
            <span>PHP(Laravel), VueJS</span>
          </div>
          <div className="screenshot">
            <img src={Covid} alt="Covid 19 Screenshot" />
          </div>
        </div>
        <div className="project">
          <div className="title">
            <h2>iSell(Point of Sales)</h2>
          </div>
          <div className="skills">
            <span>PHP(Laravel), VueJS</span>
          </div>
          <div className="screenshot">
            <img src={Covid} alt="Covid 19 Screenshot" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projects;
