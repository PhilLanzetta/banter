import React, { useState } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import ReactPlayer from "react-player"

const VideoWithCover = ({
  coverImage,
  videoId,
  vertical,
  title,
  widescreen,
}) => {
  const [playerReady, setPlayerReady] = useState(false)

  return (
    <figure
      className={`video-container ${vertical ? "vertical-video" : ""} ${
        widescreen ? "widescreen-video" : ""
      }`}
    >
      <div className="video-media">
        {!playerReady && (
          <GatsbyImage
            image={coverImage.gatsbyImageData}
            alt={coverImage.description || coverImage.title}
            className="cover-image-for-video"
          />
        )}
        <ReactPlayer
          url={`https://player.vimeo.com/video/${videoId}`}
          onReady={() => setPlayerReady(true)}
          controls
          width={"100%"}
          height={"100%"}
        />
      </div>
      <figcaption>{title}</figcaption>
    </figure>
  )
}

export default VideoWithCover
