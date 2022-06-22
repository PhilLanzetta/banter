import React from "react"
import Marquee from "react-fast-marquee"
import { graphql, useStaticQuery } from "gatsby"

const MarqueeSlider = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulMarquee {
        marqueeItems
      }
    }
  `)

  const delay =
    typeof sessionStorage.getItem("welcomeShown") !== "undefined" &&
    sessionStorage.getItem("welcomeShown") !== "true"

  return (
    <Marquee
      className="word-marquee"
      gradient={false}
      speed={80}
      delay={delay ? 6.5 : 0}
    >
      {[...Array(10)].map((e, i) => (
        <div className="marquee-items" key={i}>
          {data.contentfulMarquee.marqueeItems.map((item, index) => (
            <div key={index} className="marquee-word">
              {item}
            </div>
          ))}
        </div>
      ))}
    </Marquee>
  )
}

export default MarqueeSlider
