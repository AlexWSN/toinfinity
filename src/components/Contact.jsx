import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto px-4 py-16"
      data-aos="fade-right">
      <header className="mb-8">
        <h2 className="text-3xl font-bold text-sky-400 drop-shadow-[0_0_0.3rem_#0ff]">
          Contact
        </h2>
      </header>
      <article className="space-y-4 text-gray-300">
        <p>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:sasualexandra97@gmail.com"
            className="text-sky-400 hover:underline">
            sasualexandra97@gmail.com
          </a>
        </p>
        <p>
          <strong>Phone:</strong> 0763 268 996
        </p>
        <p>
          <strong>Location:</strong> Iași, România
        </p>
      </article>
    </section>
  );
}
