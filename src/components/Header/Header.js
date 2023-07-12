import React from "react";
import "./Header.css";
import signature from "../assert/signature.png";

const Header = () => {
  const handleScrollToHome = () => {
    const offset = 750; // Adjust the offset as needed
    window.scrollTo({
      top: window.innerHeight - offset,
      behavior: "smooth",
    });
  };
  const handleScrollToAbout = () => {
    const offset = 40; // Adjust the offset as needed
    window.scrollTo({
      top: window.innerHeight - offset,
      behavior: "smooth",
    });
  };

  const handleScrollToProjects = () => {
    const offset = -350; // Adjust the offset as needed
    window.scrollTo({
      top: window.innerHeight - offset,
      behavior: "smooth",
    });
  };

  const handleScrollToContact = () => {
    const offset = -1950; // Adjust the offset as needed
    window.scrollTo({
      top: window.innerHeight - offset,
      behavior: "smooth",
    });
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <img src={signature} alt="signature" />
        </div>
        <ul className="nav-links">
          <li>
            <a onClick={handleScrollToHome}>Home</a>
          </li>
          <li>
            <a onClick={handleScrollToAbout}>About</a>
          </li>
          <li>
            <a onClick={handleScrollToProjects}>Projects</a>
          </li>
          <li>
            <a onClick={handleScrollToContact}>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
