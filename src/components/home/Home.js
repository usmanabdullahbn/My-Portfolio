import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faHtml5,
  faCss3Alt,
  faJs,
} from "@fortawesome/free-brands-svg-icons";
import "./Home.css";
import homeImg from "../assert/home-removebg-preview (1).png";

const Home = () => {
  return (
    <div id="home" className="home-section">
      <div className="name">
        <span className="span">👋</span>
        <div style={{marginLeft: "20px"}}>
          <p className="p-text">Hello , I am</p>
          <h1 className="head-text">Usman</h1>
        </div>
      </div>
      <div className="container">
        <h1 className="h1-text">Welcome to My Portfolio!</h1>
        <p className="p-info">
          I am a passionate Front End developer with expertise in web
          development. I specialize in building modern and responsive websites
          using Raect Js.
          <span className="icon-container">
        <FontAwesomeIcon icon={faHtml5} className="icon" title="HTML5" style={{color: "#E44D26"}} />
        <FontAwesomeIcon icon={faCss3Alt} className="icon" title="CSS3" style={{color: "#1572B6"}}/>
        <FontAwesomeIcon icon={faJs} className="icon" title="JavaScript" style={{color: "#F7DF1E"}}/>
        <FontAwesomeIcon icon={faReact} className="icon" title="React" style={{color: "#61DAFB"}}/>
      </span>
        </p>
      <button className="button-home">Contact Me</button>
      </div>
      
      <div className="img-container">
        <img src={homeImg} alt="homeImg" />
      </div>
    </div>
  );
};

export default Home;
