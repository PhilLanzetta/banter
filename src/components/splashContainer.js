import React, { useEffect, useState } from "react"
import Splash from "./splash"

const SplashContainer = () => {
  useEffect(() => {
    const sessionSet = setTimeout(() => {
      sessionStorage.setItem("welcomeShown", "true")
    }, 10000)
    return () => clearTimeout(sessionSet)
  }, [])

  if (typeof window !== "undefined" && window.sessionStorage) {
    return (
      <>
        {typeof sessionStorage.getItem("welcomeShown") !== null &&
          sessionStorage.getItem("welcomeShown") !== "true" && (
            <Splash />
          )}
      </>
    )
  } else {
    return
  }
}

export default SplashContainer
