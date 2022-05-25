import React, { useEffect } from "react"
import logo from "../assets/images/footer.svg"

const Splash = () => {
  useEffect(() => {
    document.body.style.overflowY = "hidden"
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      document.body.style.overflowY = "scroll"
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
