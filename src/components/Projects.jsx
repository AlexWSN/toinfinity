import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "IceCream",
      desc: "Responsive website using Parcel, SCSS, and JavaScript.",
      links: [{ label: "Repo", href: "https://github.com/AlexWSN/IceCream" }],
    },
    {
      title: "Scary Frog Graphics",
      desc: "HTML, CSS, JS – Game-style interface with interactive UI.",
      links: [
        { label: "Repo", href: "https://github.com/AlexWSN/webfrog01" },
        { label: "Live", href: "https://alexwsn.github.io/webfrog01/" },
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="max-w-4xl mx-auto px-4 py-16"
      data-aos="fade-up">
      <header className="text-center mb-8">
        <h2 className="text-3xl font-bold text-sky-400 mb-2">Projects</h2>
        <p className="text-gray-300">
          A selection of my work during the GoIT course and personal practice
        </p>
      </header>
      <div className="space-y-8">
        {projects.map((p, i) => (
          <article
            key={i}
            className="p-6 bg-gray-900 rounded-lg shadow-inner hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold text-white mb-2">
              {p.title}
            </h3>
            <p className="text-gray-300 mb-4">{p.desc}</p>
            <div className="flex flex-wrap gap-4">
              {p.links.map((l, j) => (
                <a
                  key={j}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:underline">
                  {l.label}
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
