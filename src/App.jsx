import React from "react";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import DarkModeToggle from "./components/DarkModeToggle";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-gray-100 dark:bg-darkBg dark:text-darkText transition-theme">
      <DarkModeToggle />
      <Intro />
      <Skills />
      <Experience />
      <Projects />
      <Footer /> 
    </div>
  );
};

export default App;