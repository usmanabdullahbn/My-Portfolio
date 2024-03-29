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
import L2lLogo from "../assert/L2L Logo.png";
import ChatbotLogo from "../assert/chatbot img.png";
import adminDashboardLogo from "../assert/admin-dashboard.png";

const Projects = () => {
  const [reactProject, setReactProject] = useState("block");
  const [jsProject, setJsProject] = useState("none");
  const [landingPage, setLandingPage] = useState("none");

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
            My Creative <span className="portfolio">Projects</span> <br />{" "}
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

            {/* AI Chatbot🤖!  */}
            <div className="project" style={{ display: reactProject }}>
              <a href="https://ai-chatbot-917d5.web.app/" target="_blank">
                <img
                  src={ChatbotLogo}
                  style={{ height: "100px" }}
                  alt="Chatbot Logo"
                />
                <h2>AI Chatbot🤖! </h2>
                <p>
                  The "ChatGenius" AI Chatbot is a cutting-edge web application
                  crafted using OpenAI's API, Vite, and React. Its capabilities
                  span from answering queries to providing information, making
                  it a versatile addition to digital interactions. With an
                  intuitive interface and powerful AI backend, ChatGenius
                  exemplifies the seamless fusion of technology and user
                  engagement. Explore the future of chatbots in the realm of
                  Vite and React with ChatGenius!
                </p>
              </a>
            </div>
            {/* Admin Dashboard!  */}
            <div className="project" style={{ display: reactProject }}>
              <a href="https://admin-dashboard-eight-ruby.vercel.app/" target="_blank">
                <img
                  src={adminDashboardLogo}
                  style={{ height: "100px" }}
                  alt="dashboard Chatbot Logo"
                />
                <h2>Admin' Dashboard </h2>
                <p>
                Dashboard App is designed specifically for e-commerce stores, equipped with dynamic Charts & Apps. Developed using TypeScript, Sass, and React Table, this comprehensive solution offers seamless management of your online store operations. Gain valuable insights through intuitive analytics, enabling informed decision-making for enhanced performance and growth.
                </p>
              </a>
            </div>
            
            {/* Voting app */}
            <div className="project" style={{ display: reactProject }}>
              <a href="https://voting-app-76441.web.app" target="_blank">
                <img src={L2lLogo} style={{ height: "100px" }} alt="L2L Logo" />
                <h2>Voting App!</h2>
                <p>
                  The "L2L Elections 2023-24 Voting App" is a web application
                  designed for school elections. It enables students to view a
                  list of candidates running for various positions, including
                  Finance Manager, Event Coordinator, Stem Head, Literary Head,
                  Sport Head, and their deputies. Users can cast votes for each
                  role, and the app ensures that all positions are filled for a
                  valid vote. Real-time, as students vote, the app provides
                  real-time updates on the number of votes each candidate
                  receives.
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
