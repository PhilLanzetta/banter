import React, { useEffect, useLayoutEffect } from "react"
import logo from "../assets/images/footer.svg"

const Splash = () => {
  useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow

    document.body.style.overflow = "hidden"

    return () => (document.body.style.overflow = originalStyle)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      document.body.style.overflow = "scroll"
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
