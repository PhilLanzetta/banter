import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { debounce } from "../utilities/helpers"
import logo from "../assets/images/logo2.svg"

const HeaderHome = ({ toggleSidebar, isOpen }) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(window.outerWidth < 769)

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset

    if (currentScrollPos === 0 && !isOpen) {
      setVisible(false)
    } else if (prevScrollPos > currentScrollPos || isOpen) {
      setVisible(true)
    } else {
      setVisible(false)
    }
    setPrevScrollPos(currentScrollPos)
  }, 10)

  const handleMobileScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset
    if (currentScrollPos < 80 && !isOpen) {
      setVisible(false)
    } else {
      setVisible(true)
    }
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
      window.addEventListener("scroll", handleMobileScroll)

      return () => window.removeEventListener("scroll", handleMobileScroll)
    }
  }, [prevScrollPos, visible, handleScroll, isMobile, handleMobileScroll])

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

export default HeaderHome
