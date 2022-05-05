import React from "react"
import LayoutHome from "../components/layoutHome"
import Seo from "../components/seo"
import SplashContainer from "../components/splashContainer"
import MarqueeSlider from "../components/marquee"
import MailBanner from "../components/mailBanner"
import Hero from "../components/hero"
import HomeProjects from "../components/homeProjects"
import Press from "../components/press"

const IndexPage = () => {
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
