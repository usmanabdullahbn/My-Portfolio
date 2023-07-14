import React, { useState } from "react";
import "./Header.css";
import signature from "../assert/signature.png";
import navbarIcon from "../assert/Nav bar icon.png";
import closeIcon from "../assert/black-close-icon.png";

const Header = () => {
  const [isClick, setIsClick] = useState(false);
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
  const openNavbar = () => {
    setIsClick(true);
    // console.log("CLicked!")
  };
  const closeNavbar = () => {
    setIsClick(false);
  };
  return (
    <header className="header">
      <nav className="navbar" id={isClick == true ? "nav-res" : ""}>
        <div className="logo">
          <img src={signature} alt="signature" />
        </div>
        <ul className="nav-links" id={isClick == true ? "nav-link-res" : ""}>
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
          <li className="close-icon">
            <img
              src={closeIcon}
              alt="closeIcon"
              className="close-icon-img"
              onClick={closeNavbar}
            />
          </li>
        </ul>
        <div className="nav-icon">
          <img
            src={navbarIcon}
            alt="navIcon"
            className="icon-img"
            onClick={openNavbar}
            id={isClick == true ? "nav-icon-res" : ""}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
