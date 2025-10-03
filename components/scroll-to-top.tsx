"use client"

import { useEffect } from "react"

export function ScrollToTop() {
  useEffect(() => {
    // Scroll to top when component mounts or when page loads
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })

    // Also handle browser back/forward navigation
    const handlePopState = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      })
    }

    window.addEventListener("popstate", handlePopState)

    return () => {
      window.removeEventListener("popstate", handlePopState)
    }
  }, [])

  return null
}