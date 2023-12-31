import React from "react";
import "./Footer.css";
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';


const Footer = () => {
  return (
    <div className="footer-section">
      <h1 className="my-name">Usman Abdullah</h1>
      <p className="footer-text">
        Thank you for visiting the website. I hope you were able to find what
        you were looking for.
      </p>
      <div className="social-links">
          <a href="mailto:usmanabdullahbn@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope />
          </a>
          <a href="https://www.linkedin.com/in/usman-abdullah-061a3623a/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
          </a>
          <a href="https://github.com/usmanabdullahbn" target="_blank" rel="noopener noreferrer">
          <FaGithub />
          </a>
          <a href="https://www.instagram.com/usmanabdullahbn" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
          </a>
        </div>
      <p>© Copyright UsmanAbdullah. All Rights Reserved</p>
      <p>Designed by UsmanAbdullah</p>
    </div>
  );
};

export default Footer;
