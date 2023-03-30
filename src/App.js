import React from "react";
// import "./index.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/sections/Hero";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  );
};

export default App;
