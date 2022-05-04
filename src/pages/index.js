import React, { useEffect } from "react"
import gsap from "gsap"
import LayoutHome from "../components/layoutHome"
import Seo from "../components/seo"
import SplashContainer from "../components/splashContainer"
import MarqueeSlider from "../components/marquee"
import MailBanner from "../components/mailBanner"
import Hero from "../components/hero"
import HomeProjects from "../components/homeProjects"
import Press from "../components/press"

const IndexPage = ({ transitionStatus }) => {
  useEffect(() => {
    gsap.to(".home-page", {
      autoAlpha: 1,
      duration: 1,
    })
  }, []) //THIS IS RUN THE FIRST TIME THE SITE IS OPENED

  useEffect(() => {
    if (transitionStatus === "entering") {
      gsap.to(".home-page", {
        autoAlpha: 1,
        duration: 1, //if we are entering the page, let's make the div with class .hometex visible in one second
      })
    }
    if (transitionStatus === "exiting") {
      gsap.to(".home-page", { autoAlpha: 0, duration: 1 }) //if we are exiting  the page, let's make the div with class .hometex transparent in one second
    }
  }, [transitionStatus])

  return (
    <LayoutHome>
      <Seo title="Home" />
      <div className="splash">
        <SplashContainer />
      </div>
      <div className="home-page">
        <Hero />
        <MarqueeSlider />
        <HomeProjects />
        <Press />
        <MailBanner />
      </div>
    </LayoutHome>
  )
}

export default IndexPage
