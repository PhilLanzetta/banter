import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const Hero = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulHeroVideo {
        horizontalVideoId
        verticalVideoId
        horizontalVideoPoster {
          gatsbyImageData
          description
          title
        }
        verticalVideoPoster {
          gatsbyImageData
          description
          title
        }
      }
    }
  `)
  const [width, setWidth] = useState('100vw')
  const [height, setHeight] = useState('100vh')
  const [videoPlay, setVideoPlay] = useState(false)

  useEffect(() => {
    setWidth(window.outerWidth)
    setHeight(window.outerHeight)
  }, [])

  useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.outerWidth)
      setHeight(window.outerHeight)
    }
    window.addEventListener("resize", handleWindowResize)

    return () => window.removeEventListener("resize", handleWindowResize)
  }, [])

  const minHorizontalHeight = (width / 9) * 16

  const minHorizontalWidth = (height * 16) / 9

  const minVerticalHeight = (width / 9) * 16

  const minVerticalWidth = (height * 16) / 9

  return width < height ? (
    <div className="hero-container" style={{ height: height, width: width }}>
      {!videoPlay && (
        <GatsbyImage
          className="fallback-img"
          image={data.contentfulHeroVideo.verticalVideoPoster.gatsbyImageData}
          alt={
            data.contentfulHeroVideo.verticalVideoPoster.description ||
            data.contentfulHeroVideo.verticalVideoPoster.title
          }
        />
      )}
      <iframe
        onPlay={() => setVideoPlay(true)}
        style={
          height / width >= 1.77
            ? { minHeight: "100%", minWidth: minVerticalWidth }
            : { minHeight: minVerticalHeight, minWidth: "100%" }
        }
        src={`https://player.vimeo.com/video/${data.contentfulHeroVideo.verticalVideoId}?autoplay=1&muted=1&playsinline=1&controls=0&loop=1%autopause=0`}
        title="banter reel"
      />
    </div>
  ) : (
    <div className="hero-container" style={{ height: height, width: width }}>
      {!videoPlay && (
        <GatsbyImage
          className="fallback-img"
          image={data.contentfulHeroVideo.horizontalVideoPoster.gatsbyImageData}
          alt={
            data.contentfulHeroVideo.horizontalVideoPoster.description ||
            data.contentfulHeroVideo.horizontalVideoPoster.title
          }
        />
      )}
      <iframe
        onPlay={() => setVideoPlay(true)}
        style={
          height / width >= 0.56
            ? { minHeight: "100%", minWidth: minHorizontalWidth }
            : { minHeight: minHorizontalHeight, minWidth: "100%" }
        }
        src={`https://player.vimeo.com/video/${data.contentfulHeroVideo.horizontalVideoId}?autoplay=1&muted=1&playsinline=1&controls=0&loop=1&autopause=0`}
        title="banter reel"
      />
    </div>
  )
}

export default Hero
