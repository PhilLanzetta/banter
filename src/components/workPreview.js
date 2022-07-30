import React, { useState } from "react"
import Vimeo from "@u-wave/react-vimeo"
import slugify from "slugify"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import FadeIn from "./fadeIn"

const WorkPreview = ({ data, featured, home }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasPlayed, setHasPlayed] = useState(false)
  const [isPaused, setIsPaused] = useState(true)
  const [hovered, setHovered] = useState(false)
  const [ready, setReady] = useState(false)
  const { title, videoId, loadingImage } = data
  const cleanedUpTitle = title.replace(/([A-Z]+)/g, " $1").trim()
  slugify.extend({ "'": "-" })
  const slug = slugify(cleanedUpTitle, { lower: true, remove: /[*+~.()"!:@]/g })

  const handleMouseEnter = () => {
    setHovered(true)
    if (ready) {
      setIsPaused(false)
    }
  }

  const handleMouseLeave = () => {
    setHovered(false)
    if (isPlaying) {
      setIsPaused(true)
    } else {
      setTimeout(() => setIsPaused(true), 1500)
    }
  }

  let containerClass

  if (featured) {
    containerClass = "featured-preview"
  } else if (home) {
    containerClass = "home-preview"
  } else {
    containerClass = "work-preview"
  }

  return (
    <div className={containerClass}>
      <FadeIn>
        <div
          className="work-preview-media"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onFocus={handleMouseEnter}
          onBlur={handleMouseLeave}
          role="presentation"
        >
          <Link to={`/${slug}`} className="work-video-link"></Link>
          {hovered && !hasPlayed && (
            <div className="loader">
              <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          )}
          <GatsbyImage
            image={loadingImage.gatsbyImageData}
            className={`work-cover-img ${ready ? "work-cover-hide" : ""}`}
            alt={loadingImage.description || loadingImage.title}
          />
          <Vimeo
            video={videoId}
            paused={!hovered && isPaused}
            showByline={false}
            controls={false}
            responsive
            muted
            autopause={hasPlayed}
            playsinline
            loop
            onPlay={() => {
              setIsPlaying(true)
              setHasPlayed(true)
            }}
            onLoaded={() => setTimeout(setReady(true), 2000)}
            className="work-preview-video"
          />
        </div>
        <div className="work-video-info">
          <Link to={`/${slug}`} className="title-link">
            {title}
          </Link>
          <Link
            to={`/${slug}`}
            className="work-view-link hover-underline-animation-full black"
          >
            VIEW PROJECT →
          </Link>
        </div>
      </FadeIn>
    </div>
  )
}

export default WorkPreview
