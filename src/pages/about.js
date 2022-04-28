import * as React from "react"
import { Link, graphql } from "gatsby"
import Fade from "react-reveal/Fade"

import Layout from "../components/layout"
import Seo from "../components/seo"
import AboutIntro from "../components/aboutIntro"
import AboutCarousel from "../components/aboutCarousel"
import Team from "../components/team"
import MarqueeSlider from "../components/marquee"
import Process from "../components/process"
import MailBanner from "../components/mailBanner"

const About = ({ data }) => (
  <Layout>
    <Seo title="About" />
    <AboutIntro />
    <AboutCarousel />
    <Fade bottom>
      <p className="about-details">
        {data.contentfulAbout.orgDesc.internal.content}
      </p>
    </Fade>
    <Team />
    <MarqueeSlider />
    <Process />
    <MailBanner />
  </Layout>
)

export const query = graphql`
  {
    contentfulAbout {
      orgDesc: childContentfulAboutOrgDescriptionTextNode {
        internal {
          content
        }
      }
    }
  }
`

export default About
