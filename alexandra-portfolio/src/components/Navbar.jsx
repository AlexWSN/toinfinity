import React from 'react'

export default function Navbar() {
  return (
    <header className="fixed w-full bg-[#111] z-50">
      <nav className="max-w-4xl mx-auto flex items-center justify-between p-4">
        <div className="text-2xl font-bold">Alexandra Sasu</div>
        <ul className="flex gap-6">
          {['aboutme','projects','certificates','experience','contact'].map(id => (
            <li key={id}>
              <a href={`#${id}`} className="hover:text-sky-400">
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
