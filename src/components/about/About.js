import React from "react";
import "./About.css";
import ProgressBar from "./ProgressBar";
const About = () => {
  return (
    <>
      <div class="about-section">
        <div class="container-about">
          <h2 className="h2-about">About Me</h2>
          <p className="p-about">
            As a dedicated O-Level student, I am currently expanding my skillset
            to encompass full-stack development. With a strong foundation in
            Front-End Development and React experience, I am working towards
            becoming a skilled Full-Stack Developer in the coming months. I am
            committed to honing my abilities and contributing to meaningful
            projects that make a difference.
          </p>
        </div>
        <div className="skills-section">
          <div className="bar">
            <h2>React JS</h2>
            <div>
              <ProgressBar percentage={85} />
            </div>
          </div>
          <div className="bar">
            <h2>JavaScript</h2>
            <div>
              <ProgressBar percentage={70} />
            </div>
          </div>
          <div className="bar">
            <h2>CSS</h2>
            <div>
              <ProgressBar percentage={60} />
            </div>
          </div>
          <div className="bar">
            <h2>HTML</h2>
            <div>
              <ProgressBar percentage={80} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
