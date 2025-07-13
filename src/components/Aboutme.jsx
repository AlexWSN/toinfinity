import React, { useState } from "react";

export default function Aboutme() {
  const [showPaintings, setShowPaintings] = useState(false);
  const [showModels, setShowModels] = useState(false);

  return (
    <section
      id="aboutme"
      className="section-container relative z-10 py-12"
      data-aos="fade-up">
      {/* Header */}
      <header className="text-center mb-12">
        <img
          src="/images/alexandra.jpeg"
          alt="Alexandra Sasu"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-md mx-auto border-4 border-sky-400"
        />
        <h1 className="text-3xl font-bold text-sky-400 animate__animated animate__fadeInDown mt-4">
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

      {/* Proiecte creative */}
      <article className="mb-12 animate__animated animate__fadeInUp animate__delay-3s">
        <h2 className="text-2xl font-semibold text-sky-400 mb-4">
          My Creative Projects
        </h2>
        <img
          src="/images/sheldon.jpeg"
          alt="Sheldon"
          className="w-64 h-64 object-cover mx-auto mb-6 rounded-lg shadow-lg"
        />

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
            {[
              "charicatures",
              "davyjhones",
              "elvis",
              "friend",
              "grandtheftlove",
              "mexicanspaghetti",
              "ozzyborisvalejo",
              "spot",
            ].map((img) => (
              <img
                key={img}
                src={`/images/${img}.jpeg`}
                alt={img}
                className="w-full h-40 object-cover rounded shadow"
              />
            ))}
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
            {["him1", "him2", "him3", "him4", "she1", "she2", "spider"].map(
              (img) => (
                <img
                  key={img}
                  src={`/images/${img}.jpeg`}
                  alt={img}
                  className="w-full h-40 object-cover rounded shadow"
                />
              )
            )}
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
