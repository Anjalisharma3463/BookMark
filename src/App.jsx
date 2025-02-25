import React from "react";
import Navbar from "./components/Navbar"; 
import Features from "./Components/Features";
import Download from "./Components/Download";
import FAQ from "./Components/FAQ";
import Login from "./Components/Login";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
     
      <Features />
  
      <Download />
      <FAQ />
      <Login  />
      <Footer />
    </>
  );
};

export default App;
