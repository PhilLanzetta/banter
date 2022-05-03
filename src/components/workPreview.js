import React, { useState } from "react"
import { Link } from "gatsby"
import ReactPlayer from "react-player"
import slugify from "slugify"
import { GatsbyImage } from "gatsby-plugin-image"
import Fade from "react-reveal/Fade"

const WorkPreview = ({ data, featured, home }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [ready, setReady] = useState(false)
  const [error, setError] = useState(false)
  const { title, videoId, loadingImage } = data
  slugify.extend({ "'": "-" })
  const slug = slugify(title, { lower: true, remove: /[*+~.()"!:@]/g })
  const handleMouseEnter = () => {
    setIsPlaying(true)
  }
  const handleMouseLeave = () => {
    setIsPlaying(false)
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
    <Fade>
      <div
        className={containerClass}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        role="presentation"
      >
        <div className="work-preview-media">
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
          <ReactPlayer
            url={`https://player.vimeo.com/video/${videoId}`}
            playing={isPlaying}
            muted
            playsinline
            loop
            onReady={() => setReady(true)}
            onError={() => setError(true)}
            width={"100%"}
            height={"100%"}
            className="work-preview-video"
          />
        </div>
        <div className="work-video-info">
          <Link
            to={`/${slug}`}
            className={`title-link ${featured ? "featured-title-link" : ""}`}
          >
            {title}
          </Link>
          <Link
            to={`/${slug}`}
            className={`work-view-link hover-underline-animation-full black ${
              featured ? "featured-view-link" : ""
            }`}
          >
            VIEW PROJECT →
          </Link>
        </div>
      </div>
    </Fade>
  )
}

export default WorkPreview
