import React, { useEffect, useLayoutEffect } from "react"
import logo from "../assets/images/footer.svg"

const Splash = () => {
  useLayoutEffect(() => {
    const originalScrollStyle = window.getComputedStyle(document.body).overflow
    const originalPositionStyle = window.getComputedStyle(
      document.body
    ).position

    document.body.style.overflow = "hidden"
    document.body.style.position = "fixed"

    return () => {
      document.body.style.overflow = originalScrollStyle
      document.body.style.position = originalPositionStyle
    }
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      document.body.style.overflow = "scroll"
      document.body.style.position = "static"
    }, 6000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="splash-container">
      <div className="splash-overlay">
        <div className="splash-content">
          <img className="splash-logo" src={logo} alt="banter logo" />
          <p className="splash-tagline">
            Creative content worth talking about.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Splash
