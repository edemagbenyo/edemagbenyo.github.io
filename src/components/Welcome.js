import React from "react";
import LinkedIn from '../assets/linkedin.png';
import Gh from '../assets/gh.png';
import Twitter from '../assets/twitter.png';


const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-left">
        <div className="welcome-name">
          <h1>Edem</h1>
          <h1>Agbenyo</h1>
          <span> </span>
        </div>
        <ul className="welcome-socials">
          <li>
            <a href="https://github.com/edemagbenyo/"><img src={Gh} alt="Github Logo" /></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/edemagbenyo/"><img src={LinkedIn} alt="LinkedIn Logo"/></a>
          </li>
          <li>
            <a href="https://www.twitter.com/edemagbenyo/"><img src={Twitter} alt="Twitter Logo"/></a>
          </li>
          
        </ul>
      </div>
      <div className="welcome-right">
        <div className="welcome-message">
          <span>Introduction</span>
          <h3>I am a Full-stack web and mobile applications engineer.</h3>
          <p>I possess over 5years of experience working with web technologies. I take delight in crafting clean and robust applications. </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
