import React from "react";
// import Header from "../../components/Header";
import HeroSection from "./HeroSection";
import Profile from "./Profile";
import Experience from "./Experiences";
import Projects from "./Projects";
import Courses from "./Courses";
import Contact from "./Contact";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      {/* <Header /> */}
      <div className="px-40 sm:px-5 bg-primary">
        <HeroSection />
        <Profile />
        <Experience />
        <Projects />
        <Courses />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
