import React from "react";
import Navbar from "./Navbar";
import Home from "./home";
import Products from "./Products";
import About from "./about";
// import Testimonials from "./Testimonials";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Products />
      <About />
      {/* <Testimonials /> */}
      <Footer />
    </>
  );
}

export default App;

