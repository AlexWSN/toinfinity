import React, { useState } from "react";

export default function Aboutme() {
  const [showPaintings, setShowPaintings] = useState(false);
  const [showModels, setShowModels] = useState(false);

  return (
    <section id="aboutme" className="section-container" data-aos="fade-up">
      {/* Header */}
      <header className="text-center mb-12">
        <img
          src="/images/alexandra.jpeg"
          alt="Alexandra Sasu"
          className="w-32 h-32 rounded-full object-cover shadow-md mx-auto relative z-10"
        />
        <h1 className="text-3xl font-bold text-sky-400 animate__animated animate__fadeInDown">
          Junior Full-Stack Developer
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-gray-300 animate__animated animate__fadeIn animate__delay-1s">
          Hi! I'm Alexandra — a creative junior fullstack developer with 1+
          years of experience...
        </p>
      </header>

      {/* Descriere */}
      <article className="mb-16 space-y-6 text-gray-300 animate__animated animate__fadeInUp animate__delay-2s">
        <h2 className="text-2xl font-semibold text-sky-400">About Me</h2>
        <p>I had the pleasure of working for over 5 years as a supervisor...</p>
        <p>Still, I felt I hadn’t quite found my place...</p>
        <p>I love painting — it helps me stay grounded...</p>
        <p>I've always been fascinated by 3D modeling...</p>
      </article>
      <div className="relative z-10">{/* conținut */}</div>

      {/* Proiecte creative */}
      <article className="mb-12 animate__animated animate__fadeInUp animate__delay-3s">
        <h2 className="text-2xl font-semibold text-sky-400 mb-4">
          My Creative Projects
        </h2>
        <img
          src="/images/sheldon.jpeg"
          alt="Sheldon"
          className="w-full max-w-md mx-auto mb-6 rounded shadow animate__animated animate__zoomIn"
        />
        <h1 className="text-red-500 text-5xl">TEST Tailwind Red</h1>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => {
              setShowPaintings(!showPaintings);
              setShowModels(false);
            }}
            className="bg-sky-500 hover:bg-sky-600 text-black px-4 py-2 rounded font-semibold">
            Show Paintings
          </button>
          <button
            onClick={() => {
              setShowModels(!showModels);
              setShowPaintings(false);
            }}
            className="bg-sky-500 hover:bg-sky-600 text-black px-4 py-2 rounded font-semibold">
            Show 2D - 3D Models
          </button>
        </div>
      </article>

      {/* Galerie picturi */}
      {showPaintings && (
        <div className="bg-gray-900 p-4 rounded-lg mb-8 animate__animated animate__fadeIn">
          <h3 className="text-xl mb-4 text-sky-400">Selected Paintings</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src="/images/charicatures.jpeg" alt="Charicatures" />
            <img src="/images/davyjhones.jpeg" alt="Davy Jhones" />
            <img src="/images/elvis.jpeg" alt="Elvis" />
            <img src="/images/friend.jpeg" alt="Friend" />
            <img src="/images/grandtheftlove.jpeg" alt="Grand Theft Love" />
            <img src="/images/mexicanspaghetti.jpeg" alt="Mexican Spaghetti" />
            <img src="/images/ozzyborisvalejo.jpeg" alt="Ozzy Boris ValLejo" />
            <img src="/images/spot.jpeg" alt="Spot" />
          </div>
          <button
            onClick={() => setShowPaintings(false)}
            className="block mt-4 text-sky-400 hover:underline">
            Close
          </button>
        </div>
      )}

      {/* Galerie modele */}
      {showModels && (
        <div className="bg-gray-900 p-4 rounded-lg animate__animated animate__fadeIn">
          <h3 className="text-xl mb-4 text-sky-400">
            3D Character Modeling – Blender
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src="/images/him1.jpeg" alt="Him1" />
            <img src="/images/him2.jpeg" alt="Him2" />
            <img src="/images/him3.jpeg" alt="Him3" />
            <img src="/images/him4.jpeg" alt="Him4" />
            <img src="/images/she1.jpeg" alt="She1" />
            <img src="/images/she2.jpeg" alt="She2" />
            <img src="/images/spider.jpeg" alt="Spider" />
          </div>
          <button
            onClick={() => setShowModels(false)}
            className="block mt-4 text-sky-400 hover:underline">
            Close
          </button>
        </div>
      )}
    </section>
  );
}
