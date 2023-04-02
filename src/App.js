import React from "react";
// import "./index.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Hero from "./components/sections/Hero";
import Portfolio from "./components/sections/Portfolio";
import Skill from "./components/sections/Skill";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
