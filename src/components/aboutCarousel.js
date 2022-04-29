import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import Marquee from "react-fast-marquee"

const AboutCarousel = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulAbout {
        photoCarousel {
          gatsbyImageData(height: 350, placeholder: BLURRED)
          id
          title
          description
        }
      }
    }
  `)

  return (
    <div className="about-carousel">
      <Marquee gradient={false} className="about-marquee" speed={30}>
        {data.contentfulAbout.photoCarousel.map(image => (
          <GatsbyImage
            key={image.id}
            className="about-image"
            image={image.gatsbyImageData}
            alt={image.description || image.title}
          />
        ))}
      </Marquee>
    </div>
  )
}

export default AboutCarousel
