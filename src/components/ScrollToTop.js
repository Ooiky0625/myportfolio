import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

const ScrollToTop = ({ scrollToProjectsFlag }) => {
  const { pathname, hash } = useLocation()

  const [scrollToProjects, setScrollToProjects] = useState(scrollToProjectsFlag)

  useEffect(() => {
    if (scrollToProjects) {
      const projectSection = document.getElementById("projects")
      if (projectSection) {
        projectSection.scrollIntoView({ behavior: "smooth" })
      }
      // Reset the flag after scrolling
      setScrollToProjects(false)
    } else if (hash) {
      const element = document.querySelector(hash)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }, [pathname, hash, scrollToProjects])

  return null
}

export default ScrollToTop
