import React, { useState } from "react";
import "./Project.css";
import martLogo from "../assert/logo-dark-removebg-preview.png";
import eStore from "../assert/E-store.png";
import wetherApp from "../assert/weather app.png";
import todo from "../assert/react todo list .png";
import biddingApp from "../assert/bidding app.png";
import todoJs from "../assert/todo list js.png";
import stopwatch from "../assert/stop time watch.png";
import appleClone from "../assert/screencapture-apple-clone-page-web-app-2023-07-12-00_20_03.png";

const Projects = () => {
  const [reactProject, setReactProject] = useState("block");
  const [jsProject, setJsProject] = useState("block");
  const [landingPage, setLandingPage] = useState("block");

  const all = () => {
    setReactProject("block");
    setJsProject("block");
    setLandingPage("block");
  };

  const reactApps = () => {
    setReactProject("block");
    setJsProject("none");
    setLandingPage("none");
  };

  const jsApps = () => {
    setReactProject("none");
    setJsProject("block");
    setLandingPage("none");
  };

  const landingPages = () => {
    setReactProject("none");
    setJsProject("none");
    setLandingPage("block");
  };

  return (
    <>
      <div className="projects-section">
        <div className="container-projects">
          <h2 className="h2-projects">
            My Creative <span className="portfolio">Portfolio</span> <br />{" "}
            <span className="showcase">Showcase!</span>
          </h2>
          <div className="project-filters">
            <div
              className="filters"
              id={
                reactProject === "block" &&
                jsProject === "block" &&
                landingPage === "block"
                  ? "active"
                  : ""
              }
              onClick={all}
            >
              All
            </div>
            <div
              className="filters"
              id={
                reactProject === "block" &&
                jsProject === "none" &&
                landingPage === "none"
                  ? "active"
                  : ""
              }
              onClick={reactApps}
            >
              React Apps
            </div>
            <div
              className="filters"
              id={
                reactProject === "none" &&
                jsProject === "block" &&
                landingPage === "none"
                  ? "active"
                  : ""
              }
              onClick={jsApps}
            >
              JavaScript Apps
            </div>
            <div
              className="filters"
              id={
                reactProject === "none" &&
                jsProject === "none" &&
                landingPage === "block"
                  ? "active"
                  : ""
              }
              onClick={landingPages}
            >
              Landing Pages
            </div>
          </div>

          <div className="projects">
            {/* Project 1 */}
            <div className="project" style={{ display: reactProject }}>
              <a href="https://martapp-bf2ff.web.app" target="_blank">
                <img
                  src={martLogo}
                  style={{ height: "100px" }}
                  alt="Mart Logo"
                />
                <h2>A Mart Modern Store!</h2>
                <p>
                  The React Mart app is a modern e-commerce application built
                  using React and Redux. It provides users with a seamless
                  shopping experience and offers a wide range of products for
                  online purchase. The app utilizes the power of React to create
                  a dynamic and interactive user interface.
                </p>
              </a>
            </div>
            {/* Project 2 */}
            <div className="project" style={{ display: reactProject }}>
              <a
                href="https://e-store-buying-and-selling.web.app/"
                target="_blank"
              >
                <img src={eStore} alt="E-Store" />
                <h2>React E-Store Buying & Selling</h2>
                <p>
                  The React E-Store app is a versatile platform designed for
                  buying and selling various products online!
                </p>
              </a>
            </div>
            {/* Project 3 */}
            <div className="project" style={{ display: reactProject }}>
              <a
                href="https://first-react-app-e8894.web.app/weather-app"
                target="_blank"
              >
                <img
                  src={wetherApp}
                  style={{ height: "200px", width: "250px" }}
                  alt="Weather App"
                />
                <h2>Weather App</h2>
                <p>
                  The React Weather App is a web application built using
                  React.js and integrated with weather APIs. <br />
                  It allows users to obtain real-time weather information for
                  various locations around the world.
                </p>
              </a>
            </div>
            {/* Project 4 */}
            <div className="project" style={{ display: reactProject }}>
              <a
                href="https://first-react-app-e8894.web.app/todo-list"
                target="_blank"
              >
                <img
                  src={todo}
                  style={{ height: "150px", width: "250px" }}
                  alt="Todo List"
                />
                <h2>My Todos</h2>
                <p>
                  The React Todo List is a web application built using the React
                  framework and the Material Design for Bootstrap (MDB) library.
                  It allows users to create, manage, and organize their tasks in
                  a convenient and user-friendly manner.
                </p>
              </a>
            </div>
            {/* Project 5 */}
            <div className="project" style={{ display: jsProject }}>
              <a href="https://biding-app-ad199.web.app/" target="_blank">
                <img src={biddingApp} alt="Bidding App" />
                <h2>Bidding App</h2>
                <p>
                  The JavaScript bidding app is a web-based application that
                  facilitates the process of conducting online auctions or
                  bidding events. It leverages the power of JavaScript, a
                  popular programming language, to create an interactive and
                  dynamic bidding platform.
                </p>
              </a>
            </div>
            {/* Project 6 */}
            <div className="project" style={{ display: jsProject }}>
              <a href="https://clock-and-stopwatch-js.web.app/" target="_blank">
                <img
                  src={stopwatch}
                  style={{ height: "150px", width: "250px" }}
                  alt="Stopwatch"
                />
                <h2>Stopwatch</h2>
                <p>
                  JavaScript Stopwatch is a simple and effective tool for
                  measuring time intervals with precision in JavaScript-based
                  applications. With its intuitive functionality and
                  user-friendly interface, it provides a reliable solution for
                  tracking elapsed time in various scenarios.
                </p>
              </a>
            </div>
            {/* Project 7 */}
            <div className="project" style={{ display: jsProject }}>
              <a
                href="https://todo-list-javascript-66bdb.web.app/"
                target="_blank"
              >
                <img
                  src={todoJs}
                  style={{ height: "400px", width: "250px" }}
                  alt="JavaScript Todo List"
                />
                <h2>Jot Down Your Today's Tasks</h2>
                <p>
                  A JavaScript Todo List is a web application that allows users
                  to create, manage, and track their tasks or to-do items.
                </p>
              </a>
            </div>
            {/* Project 8 */}
            <div className="project" style={{ display: landingPage }}>
              <a href="https://apple-clone-page.web.app/" target="_blank">
                <img src={appleClone} alt="Apple Clone Landing Page" />
                <h2>Apple Clone Landing Page</h2>
                <p>
                  The Apple Clone Landing Page that I created using HTML and CSS
                  is a replica of the original Apple landing page.
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
