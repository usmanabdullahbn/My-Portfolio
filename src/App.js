import React from "react";
import Header from "./components/Header/Header";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import Services from "./components/services/Services";
import ContactInfo from "./components/Contact-Info/Contact-Info";


function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Projects /> 
      {/* <Services /> */}
      <ContactInfo />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
