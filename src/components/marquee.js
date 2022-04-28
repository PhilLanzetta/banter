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
  return (
    <Marquee className="marquee" gradient={false} speed={80}>
      {[...Array(20)].map((e, i) => (
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
