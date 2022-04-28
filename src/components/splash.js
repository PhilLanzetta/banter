import React, { useEffect } from "react"
import logo from "../assets/images/footer.svg"

const Splash = () => {
  useEffect(() => {
    document.body.style.overflowY = "hidden"
    return () => {
      document.body.style.overflowY = "auto"
    }
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      document.body.style.overflowY = "scroll"
    }, 6000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="splash-container">
      <div class="splash-overlay">
        <div className="splash-content">
          <img class="splash-logo" src={logo} alt="banter logo" />
          <p class="splash-tagline">Creative content worth talking about.</p>
        </div>
      </div>
    </div>
  )
}

export default Splash
