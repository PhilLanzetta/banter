import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { debounce } from "../utilities/helpers"
import logo from "../assets/images/logo2.svg"

const HeaderHome = ({ toggleSidebar, isOpen }) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(false)

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset

    if (currentScrollPos === 0) {
      setVisible(false)
    } else if (
      prevScrollPos > currentScrollPos ||
      (currentScrollPos > 40 && currentScrollPos < 200) ||
      isOpen
    ) {
      setVisible(true)
    } else {
      setVisible(false)
    }
    setPrevScrollPos(currentScrollPos)
  }, 0)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [prevScrollPos, visible, handleScroll])

  return (
    <header>
      <nav>
        <div className={`navbar ${visible ? "nav-show" : "nav-hide"}`}>
          <Link to="/" onClick={isOpen ? toggleSidebar : () => {}}>
            <img className="nav-logo" src={logo} alt="banter logo" />
          </Link>
          <button
            id="nav-icon"
            className={`${isOpen ? "open" : ""}`}
            onClick={toggleSidebar}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className="desktop-page-links">
            <li>
              <Link to="/projects" className="hover-underline-animation">
                Case Studies
              </Link>
            </li>
            <li>
              <Link className="hover-underline-animation" to="/work">
                Work
              </Link>
            </li>
            <li>
              <Link className="hover-underline-animation" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
        <ul className={`mobile-page-links ${isOpen ? "show" : "hide"}`}>
          <li>
            <Link
              className="hover-underline-animation"
              to="/projects"
              onClick={toggleSidebar}
            >
              Case Studies
            </Link>
          </li>
          <li>
            <Link
              className="hover-underline-animation"
              to="/work"
              onClick={toggleSidebar}
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              className="hover-underline-animation"
              to="/about"
              onClick={toggleSidebar}
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default HeaderHome
