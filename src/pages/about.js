import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import AboutIntro from "../components/aboutIntro"
import AboutCarousel from "../components/aboutCarousel"
import Team from "../components/team"
import MarqueeSlider from "../components/marquee"
import Process from "../components/process"
import MailBanner from "../components/mailBanner"
import FadeIn from "../components/fadeIn"

const About = ({ data, location }) => (
  <Layout location={location}>
    <Seo title="About" />
    <AboutIntro />
    <AboutCarousel />
    <FadeIn>
      <p className="about-details">
        {data.contentfulAbout.orgDesc.internal.content}
      </p>
    </FadeIn>
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
