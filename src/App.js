"use client"

import { useRef } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import "./styles/Animation.css"
import Header from "./components/Header"
import Home from "./sections/Home"
import About from "./sections/About"
import Skills from "./sections/Skills"
import Education from "./sections/Education"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"
import ProjectDetail from "./sections/ProjectDetail"
import LiveProjectPage from "./sections/LiveProjectPage"

const MainLayout = () => {
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const skillsRef = useRef(null)
  const educationRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="app">
      <Header
        scrollToHome={() => scrollToSection(homeRef)}
        scrollToAbout={() => scrollToSection(aboutRef)}
        scrollToSkills={() => scrollToSection(skillsRef)}
        scrollToEducation={() => scrollToSection(educationRef)} // Fixed typo here
        scrollToProjects={() => scrollToSection(projectsRef)}
        scrollToContact={() => scrollToSection(contactRef)}
        isHomePage={true}
      />
      <main>
        <section ref={homeRef} id="home" style={{ height: "100vh" }}>
          <Home />
        </section>
        <section ref={aboutRef} id="about">
          <About />
        </section>
        <section ref={skillsRef} id="skills">
          <Skills />
        </section>
        <section ref={educationRef} id="education">
          <Education />
        </section>
        <section ref={projectsRef} id="projects">
          <Projects />
        </section>
        <section ref={contactRef} id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/project/:projectId" element={<ProjectDetail />} />
        <Route path="/live-project/:projectId" element={<LiveProjectPage />} />
      </Routes>
    </Router>
  )
}

export default App
