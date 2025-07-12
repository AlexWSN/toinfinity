import React, { useState } from "react";

export default function Aboutme() {
  const [showPaintings, setShowPaintings] = useState(false);
  const [showModels, setShowModels] = useState(false);

  return (
    <section id="Aboutme" className="max-w-5xl mx-auto px-6 py-12 text-white">
      {/* Header */}
      <header className="text-center mb-12">
        <img
          src="/images/alexandra.jpeg"
          alt="Alexandra Sasu"
          className="mx-auto rounded-full w-40 h-40 object-cover shadow-lg mb-6"
        />
        <h1 className="text-3xl font-bold text-sky-400">
          Junior Full-Stack Developer
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-gray-300">
          Hi! I'm Alexandra — a creative junior fullstack developer with 1+
          years of experience in building performant, scalable, and responsive
          web solutions. I'm also a self-taught learner, constantly exploring
          new technologies and best practices to improve my craft.
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
          schools and educational institutions all across Romania.
        </p>
        <p>
          Still, I felt I hadn’t quite found my place. After completing an
          intensive one-year fullstack development course, I decided to
          transition into a field that felt closer to my heart — partly out of a
          desire to connect with people who share my mindset and passions.
        </p>
        <p>
          I love painting — it helps me stay grounded and expressive in ways
          words can't always reach. That’s why I’ve included a small selection
          of my artwork in this portfolio: it’s a glimpse into the way I see and
          feel the world. Music is my constant companion — mostly heavy metal
          (with a funky start to every morning), and visual creativity flows
          alongside it.
        </p>
        <p>
          I've always been fascinated by 3D modeling, especially character
          design. Over the past year, I’ve been learning Blender in my spare
          time, and I’ve added here a few of my early experiments with digital
          sculpting — raw, but made with joy. I’m the proud owner of a hope:
          that one day I’ll learn to play the cello beautifully and own a '90
          Honda Prelude.
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
          className="w-full max-w-md mx-auto mb-6 rounded shadow"
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
        <div className="bg-gray-900 p-4 rounded-lg mb-8">
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
        <div className="bg-gray-900 p-4 rounded-lg">
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
