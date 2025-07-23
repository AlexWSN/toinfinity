import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Aboutme from "./components/Aboutme";
import Projects from "./components/Projects";
import Certificates from "./components/Certificate";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Starfield from "./components/Starfield";
import Hero from "./components/Hero/Hero";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden z-0">
      {/* Fundal animat */}
      <div className="fixed inset-0 -z-10">
        <Starfield />
      </div>

      <Navbar />
      <Hero />
      <main className="relative z-16">
        <Aboutme />
        <Projects />
        <Certificates />
        <Experience />
        <Contact />
      </main>
    </div>
  );
};

export default App;
