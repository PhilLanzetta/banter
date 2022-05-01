import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage } from "gatsby-plugin-image"
import VideoWithCover from "../components/videoWithCover"

const CaseStudyPage = ({ data }) => {
  const {
    cast,
    crew,
    title,
    videoId,
    loadingImage,
    headlineDescription: { headlineDescription },
    bodyText,
    mediaSection,
  } = data.contentfulCaseStudy

  console.log(data)
  return (
    <Layout>
      <div className="case-page">
        <div className="case-heading">
          <h1>{title}</h1>
          <h2>{headlineDescription}</h2>
        </div>
        <div className="case-study-body">
          <div className="case-header-video">
            <VideoWithCover coverImage={loadingImage} videoId={videoId} />
          </div>
          {bodyText && <p className="case-body-text">{bodyText.bodyText}</p>}
          {mediaSection && (
            <div className="media-section">
              {mediaSection.map((item, index) => {
                if (item.image) {
                  return (
                    <GatsbyImage
                      key={index}
                      image={item.image.gatsbyImageData}
                      alt={item.image.description || item.image.title}
                      className="single-column-image"
                    />
                  )
                } else if (item.images) {
                  return (
                    <div className="two-column-image-container">
                      {item.images.map((image, index) => (
                        <GatsbyImage
                          key={index}
                          image={image.gatsbyImageData}
                          alt={image.description || image.title}
                          className="two-column-image"
                        />
                      ))}
                    </div>
                  )
                } else {
                  return (
                    <div className="media-video-module">
                      <VideoWithCover
                        coverImage={item.coverPhoto}
                        videoId={item.videoId}
                        vertical={item.vertical}
                      />
                    </div>
                  )
                }
              })}
            </div>
          )}
          <div className="case-crew-cast">
            <h3>Crew</h3>
            {crew &&
              crew.map((item, index) => (
                <p key={index} className="cast-crew-member">
                  {item}{" "}
                </p>
              ))}
          </div>
          <div className="case-crew-cast">
            <h3>Cast</h3>
            {cast &&
              cast.map((item, index) => (
                <p key={index} className="cast-crew-member">
                  {item}{" "}
                </p>
              ))}
          </div>
        </div>
      </div>
      <div className="related">
        <h3>Related Projects</h3>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query getSingleCasStudy($title: String) {
    contentfulCaseStudy(title: { eq: $title }) {
      cast
      crew
      id
      title
      videoId
      loadingImage {
        gatsbyImageData(placeholder: BLURRED)
        title
        description
      }
      headlineDescription {
        headlineDescription
      }
      bodyText {
        bodyText
      }
      mediaSection {
        ... on ContentfulSingleColumnImage {
          id
          image {
            gatsbyImageData(placeholder: BLURRED)
            title
            description
          }
        }
        ... on ContentfulTwoColumnImage {
          id
          images {
            gatsbyImageData(placeholder: BLURRED)
            title
            description
          }
        }
        ... on ContentfulVideoModule {
          id
          videoId
          vertical
          coverPhoto {
            gatsbyImageData(placeholder: BLURRED)
            title
            description
          }
        }
      }
    }
  }
`

export default CaseStudyPage
