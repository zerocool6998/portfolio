import React from "react";
import About from "./components/About";
import Contact from "./compnents/Contact";
import Navbar from "./compnents/Navbar";
import Projects from "./compnents/Projects";
import

export default function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}