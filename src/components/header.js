import React, { useEffect, useState } from "react"
import AniLink from "gatsby-plugin-transition-link"
import { debounce } from "../utilities/helpers"
import logo from "../assets/images/logo2.svg"

const Header = ({ toggleSidebar, isOpen }) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset

    setVisible(
      prevScrollPos > currentScrollPos || currentScrollPos < 60 || isOpen
    )

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
          <AniLink fade to="/">
            <img className="nav-logo" src={logo} alt="banter logo" />
          </AniLink>
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
              <AniLink
                fade
                to="/projects"
                className="hover-underline-animation-full black"
              >
                Case Studies
              </AniLink>
            </li>
            <li>
              <AniLink
                fade
                className="hover-underline-animation-full black"
                to="/work"
              >
                Work
              </AniLink>
            </li>
            <li>
              <AniLink
                swipe
                direction="down"
                top="entry"
                className="hover-underline-animation-full black"
                to="/about"
              >
                About
              </AniLink>
            </li>
          </ul>
        </div>
        <ul className={`mobile-page-links ${isOpen ? "show" : "hide"}`}>
          <li>
            <AniLink
              fade
              className="hover-underline-animation-full black"
              to="/projects"
              onClick={toggleSidebar}
            >
              Case Studies
            </AniLink>
          </li>
          <li>
            <AniLink
              fade
              className="hover-underline-animation-full black"
              to="/work"
              onClick={toggleSidebar}
            >
              Work
            </AniLink>
          </li>
          <li>
            <AniLink
              swipe
              direction="down"
              top="entry"
              className="hover-underline-animation-full black"
              to="/about"
              onClick={toggleSidebar}
            >
              About
            </AniLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
