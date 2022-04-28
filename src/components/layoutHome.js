import React, { useState } from "react"
import HeaderHome from "./headerHome"
import Footer from "./footer"
import "../css/main.css"

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <HeaderHome toggleSidebar={toggleSidebar} isOpen={isOpen} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
