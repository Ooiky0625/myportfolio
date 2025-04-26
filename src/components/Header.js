"use client"

import { useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import "../styles/Header.css"

const Header = ({
  scrollToHome,
  scrollToAbout,
  scrollToSkills,
  scrollToEducation,
  scrollToProjects,
  scrollToContact,
  isHomePage = false,
}) => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleNavClick = (callback, sectionId) => {
    // If we are on the homepage or any section in the same page, scroll to that section
    if (isHomePage || location.pathname === "/") {
      callback()
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      // If we are on a project detail page, navigate and then scroll
      navigate("/")
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
    }
    setMenuOpen(false)
  }

  const handleLogoClick = () => {
    if (!isHomePage) {
      navigate("/")
    } else if (scrollToHome) {
      scrollToHome()
    }
  }

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container header-container">
        <div className="logo" onClick={handleLogoClick} style={{ cursor: "pointer" }}>
          Ooiky's Portfolio
        </div>
        <div className={`menu-toggle ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={`nav ${menuOpen ? "active" : ""}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <button onClick={() => handleNavClick(scrollToHome, "home")}>Home</button>
            </li>
            <li className="nav-item">
              <button onClick={() => handleNavClick(scrollToAbout, "about")}>About</button>
            </li>
            <li className="nav-item">
              <button onClick={() => handleNavClick(scrollToSkills, "skills")}>Skills</button>
            </li>
            <li className="nav-item">
              <button onClick={() => handleNavClick(scrollToEducation, "education")}>Education</button>
            </li>
            <li className="nav-item">
              <button onClick={() => handleNavClick(scrollToProjects, "projects")}>Projects</button>
            </li>
            <li className="nav-item">
              <button onClick={() => handleNavClick(scrollToContact, "contact")}>Contact</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
