import React from 'react'
import Navbar from './components/Navbar'
import Aboutme from './components/Aboutme'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Experience from './components/Experience'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="bg-[#0a0a0a] text-[#f0f0f0] min-h-screen">
      <Navbar />
      <main>
        <Aboutme />
        <Projects />
        <Certificates />
        <Experience />
        <Contact />
      </main>
    </div>
  )
}
