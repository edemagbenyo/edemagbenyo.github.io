import React, {  useState } from "react";
import "../styles/Contact.scss";
import LinkedIn from "../assets/linkedin.png";
import Gh from "../assets/gh.png";
import Twitter from "../assets/twitter.png";
import ContactSvg from "../assets/contact.svg";
import DB from '../api/db';



const Contact = () => {
  const Alert = ()=>{
    let message;
    if(!loading){
      message="";
    }else if(loading==='loading'){
      message="Sending..."
    }else if(loading==='sent'){
      message="Message sent!"
    }
  return <div className="alert">{message}</div>
  }
  const [loading,setLoading] = useState("")
  const [message, setMessage] = useState({
    name:'',
    email:'',
    message:''
  });
  const handleChange=(curr)=>{
    const r = curr;
    setMessage((prevState)=>{
      return {...prevState, ...{[r.name]:r.value}}
    })
  }
  const sendMessage = (e)=>{
    e.preventDefault()
    setLoading("loading")
    DB.collection("messages").add({...message})
    .then(function(docRef) {
      setMessage({
        name:'',
        email:'',
        message:''
      })
      setLoading("sent")
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
  }
  return (
    <div className="contact-container" id="contact">
      <div className="contact-form">
        <div className="intro">
          <img src={ContactSvg} alt="contact" />
          <h2>Got a project?</h2>
          <h2>Let's talk.</h2>
          <span></span>
          <a href="mailto:edem.agbenyo@gmail.com">edem.agbenyo@gmail.com</a>
          <p>+233 555 065 430</p>
        </div>
        <div className="form">
          <h2>Talk to me about your project.</h2>
          <form onSubmit={sendMessage}>
            <input required name="name" value={message.name} onChange={(e)=>handleChange(e.target)} placeholder="What's your name" />
            <input required name="email" value={message.email} onChange={(e)=>handleChange(e.target)} placeholder="Your awesome email" type="email" />
            <textarea required name="message" onChange={(e)=>handleChange(e.target)} placeholder="Tell me about your project"></textarea>
            <input type="submit" value="Send message" />
          </form>
          <Alert/>
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
            <a href="https://www.twitter.com/edemagbenyo/">
              <img src={Twitter} alt="Twitter Logo" />
            </a>
          </li>
        </ul>
        <p>Made with love by Edem. &copy; {new Date().getFullYear()} </p>
      </div>
    </div>
  );
};
export default Contact;
