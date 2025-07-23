import React from "react";
const Navbar = () => {
  return (
    <div className="navbar fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md px-6 py-4 flex justify-between items-center">
      <ul className="nav-menu flex gap-6 text-white font-semibold">
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#aboutme">About Me</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#certificate">Certificate</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="nav-connect text-sky-400 font-bold">Connect With Me</div>
    </div>
  );
};

export default Navbar;
