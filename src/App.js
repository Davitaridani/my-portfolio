import React from "react";
// import "./index.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/sections/Hero";
import Portfolio from "./components/sections/Portfolio";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
};

export default App;
