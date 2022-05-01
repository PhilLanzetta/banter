import React, { useState } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import ReactPlayer from "react-player"

const VideoWithCover = ({ coverImage, videoId, vertical }) => {
  const [playerReady, setPlayerReady] = useState(false)
  return (
    <div className={`video-container ${vertical ? "vertical-video" : ""}`}>
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
  )
}

export default VideoWithCover
