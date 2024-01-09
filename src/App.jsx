import React from "react";
import Header from "./sections/Header";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Pricing from "./sections/Pricing";
import Testimonial from "./sections/Testimonial";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Testimonial />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
