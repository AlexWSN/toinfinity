import React, { useState } from "react";

export default function Aboutme() {
  const [showPaintings, setShowPaintings] = useState(false);
  const [showModels, setShowModels] = useState(false);

  return (
    <section
      id="aboutme"
      className="max-w-5xl mx-auto px-6 py-12 bg-black/40 backdrop-blur-md rounded-2xl text-white shadow-md relative z-10"
      data-aos="fade-up">
      {/* Header */}
      <header className="text-center mb-12">
        <img
          src="/images/alexandra.jpeg"
          alt="Alexandra Sasu"
          className="rounded-image mx-auto"
        />
        <h1 className="font-pressstart text-3xl text-sky-400">
          Junior Full-Stack Developer
        </h1>

        <p className="mt-4 max-w-3xl mx-auto text-gray-300">
          Hi! I'm Alexandra. A creative junior fullstack developer with 1+ years
          of experience in programming, and 28 in life.
        </p>
      </header>

      {/* Descriere */}
      <article className="mb-16 space-y-6 text-gray-300">
        <h2 className="text-2xl font-semibold text-sky-400">About Me</h2>
        <p>
          I had the pleasure of working for over 5 years as a supervisor in
          parental education. During this time, I was involved in meaningful and
          impactful projects, and I like to believe that, together with my team,
          we made a positive difference on a national level, collaborating with
          schools and educational institutions all across Romania. Still, I felt
          I hadn’t quite found my place. After completing an intensive one-year
          fullstack development course, I decided to transition into a field
          that felt closer to my heart — partly out of a desire to connect with
          people who share my mindset and passions.
        </p>
        <p>
          I love painting — it helps me stay grounded and expressive in ways
          words can't always reach. That’s why I’ve included a small selection
          of my artwork in this portfolio: it’s a glimpse into the way I see and
          feel the world. Music is my constant companion — mostly heavy metal
          (with a funky start to every morning), and visual creativity flows
          alongside it. I've always been fascinated by 3D modeling, especially
          character design. Over the past year, I’ve been learning Blender in my
          spare time, and I’ve added here a few of my early experiments with
          digital sculpting — raw, but made with joy. I’m the proud owner of a
          hope: that one day I’ll learn to play the cello beautifully and own a
          '90 Honda Prelude.
        </p>
      </article>

      {/* Proiecte creative */}
      <article className="mb-12">
        <h2 className="text-2xl font-semibold text-sky-400 mb-4">
          My Creative Projects
        </h2>
        <img
          src="/images/sheldon.jpeg"
          alt="Sheldon"
          className="rounded-image mx-auto"
        />

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => {
              setShowPaintings(!showPaintings);
              setShowModels(false);
            }}
            className="bg-sky-500 hover:bg-sky-600 text-black px-4 py-2 rounded font-semibold shadow">
            Show Paintings
          </button>
          <button
            onClick={() => {
              setShowModels(!showModels);
              setShowPaintings(false);
            }}
            className="bg-sky-500 hover:bg-sky-600 text-black px-4 py-2 rounded font-semibold shadow">
            Show 2D - 3D Models
          </button>
        </div>
      </article>

      {/* Galerie picturi */}
      {showPaintings && (
        <div className="bg-gray-900 p-6 rounded-xl mb-8">
          <h3 className="text-xl mb-4 text-sky-400">Selected Paintings</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
                className="w-full h-40 object-cover rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
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
        <div className="bg-gray-900 p-6 rounded-xl">
          <h3 className="text-xl mb-4 text-sky-400">
            3D Character Modeling – Blender
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["him1", "him2", "him3", "him4", "she1", "she2", "spider"].map(
              (img) => (
                <img
                  key={img}
                  src={`/images/${img}.jpeg`}
                  alt={img}
                  className="w-full h-40 object-cover rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
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
