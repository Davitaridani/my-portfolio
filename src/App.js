import React from "react";
// import "./index.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/sections/Hero";
import Portfolio from "./components/sections/Portfolio";
import Skill from "./components/sections/Skill";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Skill />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
};

export default App;
