import React from "react";
import "../styles/Projects.scss";
import Covid from "../assets/covid.png";
import Gh from "../assets/gh.png";
import Live from "../assets/live.png";

const Links = ({links}) => {
  return (
    <div className="links">
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
const Project = ({name,skills,links,desc}) => {
  return (
    <div className="project">
      <div className="title">
        <h2>{name}</h2>
      </div>
      <div className="desc">
        {desc}
      </div>
      <div className="skills">
        <span>{skills.join(",")}</span>
      </div>
      <div className="screenshot">
        <img src={Covid} alt="Screenshot" />
      </div>
      <Links links={links} />
    </div>
  );
};
function Projects() {
  return (
    <div className="projects-container" id="projects">
      <div className="left">
        <div className="projects-intro">
          <span>Portfolio</span>
          <h2>Some of my projects</h2>

        </div>
        <Project name="Covid-19 Tracker" desc="This is a simple dashboard that displays realtime information on people affected by the novel coronavirus. The application gets the necessary data from the WHO website." skills={["Web","HTML","JS", "ReactJS"]}/>
      </div>
      <div className="right">
        <Project name="Friender" desc="A facebook like platform to make friends and stay connected. Users can create new posts, and comment on friends posts." skills={["Web","SASS","Ruby","Rails"]} />
        <Project name="iSell" desc="A web-based point of sales and inventory management system." skills={["Web","PHP(Laravel)","VueJS"]} />
      </div>
    </div>
  );
}
export default Projects;
