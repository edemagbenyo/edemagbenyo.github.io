import React from "react";
import "./Contact.scss";
import LinkedIn from "../assets/linkedin.png";
import Gh from "../assets/gh.png";
import Twitter from "../assets/twitter.png";

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <div className="contact-form">
        <div className="intro">
          <h2>Got a project?</h2>
          <h2>Let's talk.</h2>
          <span></span>
          <a href="mailto:edem.agbenyo@gmail.com">edem.agbenyo@gmail.com</a>
        </div>
        <div className="form">
          <h2>Talk to me about your project.</h2>
          <form>
            <input placeholder="What's your name" />
            <input placeholder="Your awesome email" type="email" />
            <textarea placeholder="Tell me about your project"></textarea>
            <input type="submit" value="Send message" />
          </form>
        </div>
      </div>
      <div className="links">
        <ul className="welcome-socials">
          <li>
            <a href="https://github.com/edemagbenyo/">
              <img src={Gh} alt="Github Logo" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/edemagbenyo/">
              <img src={LinkedIn} alt="LinkedIn Logo" />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/edemagbenyo/"><img src={Twitter} alt="Twitter Logo"/></a>
          </li>
        </ul>
  <p>Made with love by Edem. &copy; {(new Date).getFullYear()}</p>
      </div>
    </div>
  );
};
export default Contact;
