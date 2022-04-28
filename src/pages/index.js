import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import LayoutHome from "../components/layoutHome"
import Seo from "../components/seo"
import SplashContainer from "../components/splashContainer"
import MarqueeSlider from "../components/marquee"
import MailBanner from "../components/mailBanner"
import Hero from "../components/hero"
import HomeProjects from "../components/homeProjects"
import Press from "../components/press"

const IndexPage = () => (
  <LayoutHome>
    <Seo title="Home" />
    <SplashContainer />
    <div className="home-page">
      <Hero />
      <MarqueeSlider />
      <HomeProjects />
      <Press />
      <MailBanner />
    </div>
  </LayoutHome>
)

export default IndexPage
