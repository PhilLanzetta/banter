import React, { useState } from "react"
import Header from "./header"
import HeaderHome from "./headerHome"
import Footer from "./footer"
import { motion } from "framer-motion"

const Layout = ({ children, location }) => {
  const [isOpen, setIsOpen] = useState(false)
  const isHome = location.pathname === "/"
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      {isHome ? (
        <HeaderHome toggleSidebar={toggleSidebar} isOpen={isOpen}></HeaderHome>
      ) : (
        <Header toggleSidebar={toggleSidebar} isOpen={isOpen} />
      )}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          type: "spring",
          mass: 0.35,
          stiffness: 75,
          duration: 0.5,
        }}
      >
        {children}
        <Footer />
      </motion.main>
    </>
  )
}

export default Layout
