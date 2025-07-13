import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Aboutme from "./components/Aboutme";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Starfield from "./components/Starfield";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      {" "}
      {/* Starfield ca fundal full */}
      <div className="fixed inset-0 -z-10">
        <Starfield />
      </div>
      <Navbar />
      <main>
        <Aboutme />
        <Projects />
        <Certificates />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
