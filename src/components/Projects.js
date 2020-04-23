import React from "react";
import "./Projects.scss";
import Covid from "../assets/covid.png";
import Gh from "../assets/gh.png";
import Live from "../assets/live.png";

const Links = ({links}) => {
  return (
    <div className="links" id="projects">
      <a href={links.live} title="View live">
        <img src={Live} alt="live" />
      </a>
      <a href={links.github} title="View on github">
        <img src={Gh} alt="github" />
      </a>
    </div>
  );
};
Links.defaultProps={
  links:{
    live:"https://edemagbenyo.com",
    github:"https://github.com/edemagbenyo"
  }
}
const Project = ({name,skills,links}) => {
  return (
    <div className="project">
      <div className="title">
        <h2>{name}</h2>
      </div>
      <div className="skills">
        <span>{skills.join(",")}</span>
      </div>
      <div className="screenshot">
        <img src={Covid} alt="Covid 19 Screenshot" />
      </div>
      <Links links={links} />
    </div>
  );
};
function Projects() {
  return (
    <div className="projects-container">
      <div className="left">
        <div className="projects-intro">
          <span>Portfolio</span>
          <h2>Some of my projects</h2>
          <p></p>
        </div>
        <Project name="Covid-19 Tracker" skills={["Vanilla JS", "ReactJS"]}/>
      </div>
      <div className="right">
        <Project name="Friender(Facebook like )" skills={["Ruby(Rails)"]} />
        <Project name="iSell(Point of Sales)" skills={["PHP(Laravel)","VueJS"]} />
      </div>
    </div>
  );
}
export default Projects;
