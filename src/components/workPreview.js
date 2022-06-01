import React, { useState, useEffect } from "react"
import Vimeo from "@u-wave/react-vimeo"
import slugify from "slugify"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import FadeIn from "./fadeIn"

const WorkPreview = ({ data, featured, home }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [ready, setReady] = useState(false)
  const [error, setError] = useState(false)
  const { title, videoId, loadingImage } = data
  const cleanedUpTitle = title.replace(/([A-Z]+)/g, " $1").trim()
  slugify.extend({ "'": "-" })
  const slug = slugify(cleanedUpTitle, { lower: true, remove: /[*+~.()"!:@]/g })

  const handleMouseEnter = () => {
    setHovered(true)
  }
  const handleMouseLeave = () => {
    setHovered(false)
    setIsPlaying(false)
  }

  const onTimeout = () => {
    setIsPlaying(true)
  }

  useEffect(() => {
    const timer = hovered && setTimeout(onTimeout, 200)
    return () => {
      clearTimeout(timer)
    }
  }, [hovered])

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
          onMouseEnter={ready ? handleMouseEnter : undefined}
          onMouseLeave={handleMouseLeave}
          onFocus={ready ? handleMouseEnter : undefined}
          onBlur={handleMouseLeave}
          role="presentation"
        >
          <Link to={`/${slug}`} className="work-video-link"></Link>
          <GatsbyImage
            image={loadingImage.gatsbyImageData}
            className={`work-cover-img ${ready ? "work-cover-hide" : ""}`}
            alt={loadingImage.description || loadingImage.title}
          />
          {error && (
            <div className="work-error-msg">
              There was an error in loading this video
            </div>
          )}
          <Vimeo
            video={videoId}
            paused={!isPlaying}
            showByline={false}
            controls={false}
            responsive
            muted
            playsinline
            loop
            onReady={() => setReady(true)}
            onError={() => setError(true)}
            onPlay={() => setError(false)}
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
