import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import ReactPlayer from "react-player/vimeo"

const Hero = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulHeroVideo {
        horizontalVideoId
        verticalVideoId
        horizontalVideoPoster {
          gatsbyImageData
        }
        verticalVideoPoster {
          gatsbyImageData
        }
      }
    }
  `)
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)

  useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    }
    window.addEventListener("resize", handleWindowResize)

    return () => window.removeEventListener("resize", handleWindowResize)
  }, [])

  const minHorizontalHeight = (width / 9) * 16

  const minHorizontalWidth = (height * 16) / 9

  const minVerticalHeight = (width / 9) * 16

  const minVerticalWidth = (height * 16) / 9

  return width < height ? (
    <div className="hero-container">
      <GatsbyImage
        className="fallback-img"
        image={data.contentfulHeroVideo.verticalVideoPoster.gatsbyImageData}
      />
      <iframe
        style={
          height / width >= 1.77
            ? { "min-height": "100%", "min-width": minVerticalWidth }
            : { "min-height": minVerticalHeight, "min-width": "100%" }
        }
        src={`https://player.vimeo.com/video/${data.contentfulHeroVideo.verticalVideoId}?autoplay=1&muted=1&playsinline=1&controls=0&loop=1%autopause=0`}
        title="banter reel"
      />
    </div>
  ) : (
    <div className="hero-container">
      <GatsbyImage
        className="fallback-img"
        image={data.contentfulHeroVideo.horizontalVideoPoster.gatsbyImageData}
      />
      <iframe
        style={
          height / width >= 0.56
            ? { "min-height": "100%", "min-width": minHorizontalWidth }
            : { "min-height": minHorizontalHeight, "min-width": "100%" }
        }
        src={`https://player.vimeo.com/video/${data.contentfulHeroVideo.horizontalVideoId}?autoplay=1&muted=1&playsinline=1&controls=0&loop=1&autopause=0`}
        title="banter reel"
      />
    </div>
  )
}

export default Hero
