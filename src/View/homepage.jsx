import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
import Intro from "../Components/introSection";
import About from "../Components/aboutSection";
import Skills from "../Components/skillSection";
import Projects from "../Components/projectSection";
import Contact from "../Components/contactMeSection";
import Footer from "../Components/footer";
import Navbar from "../Components/navbar";

function Homepage() {
  return (
    <div className="App">
        <Navbar/>
        <Intro/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
  );
}

export default Homepage;
