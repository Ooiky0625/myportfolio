"use client"

import { useIntersectionObserver } from "../hooks/useIntersectionObserver"
import "../styles/Animation.css"

export function FadeInSection({ children, threshold = 0.1, rootMargin = "0px", className = "", ...props }) {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold,
    rootMargin,
  })

  return (
    <div ref={elementRef} className={`fade-in-section ${isIntersecting ? "is-visible" : ""} ${className}`} {...props}>
      {children}
    </div>
  )
}
