import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { debounce } from "../utilities/helpers"
import logo from "../assets/images/logo2.svg"

const Header = ({ toggleSidebar, isOpen }) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)
  const [isMobile, setIsMobile] = useState(window.outerWidth < 769)

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset

    setVisible(
      prevScrollPos > currentScrollPos || currentScrollPos < 60 || isOpen
    )

    setPrevScrollPos(currentScrollPos)
  }, 10)

  const handleResize = () => {
    const windowSize = window.outerWidth
    setIsMobile(windowSize < 769)
  }

  useEffect(() => {
    if (!isMobile) {
      window.addEventListener("scroll", handleScroll)

      return () => window.removeEventListener("scroll", handleScroll)
    } else {
      return
    }
  }, [prevScrollPos, visible, handleScroll, isMobile])

  useEffect(() => {
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

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
              <Link
                to="/case-studies"
                className="hover-underline-animation-full black"
              >
                Case Studies
              </Link>
            </li>
            <li>
              <Link className="hover-underline-animation-full black" to="/work">
                Work
              </Link>
            </li>
            <li>
              <Link
                className="hover-underline-animation-full black"
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
        <ul className={`mobile-page-links ${isOpen ? "show" : "hide"}`}>
          <li>
            <Link
              className="hover-underline-animation-full black"
              to="/case-studies"
              onClick={toggleSidebar}
            >
              Case Studies
            </Link>
          </li>
          <li>
            <Link
              className="hover-underline-animation-full black"
              to="/work"
              onClick={toggleSidebar}
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              className="hover-underline-animation-full black"
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

export default Header
