import React, { useEffect } from "react"
import gsap from "gsap"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage } from "gatsby-plugin-image"
import VideoWithCover from "../components/videoWithCover"
import WorkPreview from "../components/workPreview"
import FadeIn from "../components/fadeIn"
import Seo from "../components/seo"

const CaseStudyPage = ({ data, transitionStatus }) => {
  useEffect(() => {
    gsap.to(".case-page", {
      autoAlpha: 1,
      duration: 1,
    })
  }, []) //THIS IS RUN THE FIRST TIME THE SITE IS OPENED

  useEffect(() => {
    if (transitionStatus === "entering") {
      gsap.to(".case-page", {
        autoAlpha: 1,
        duration: 1, //if we are entering the page, let's make the div with class .hometex visible in one second
      })
    }
    if (transitionStatus === "exiting") {
      gsap.to(".case-page", { autoAlpha: 0, duration: 1 }) //if we are exiting  the page, let's make the div with class .hometex transparent in one second
    }
  }, [transitionStatus])

  const {
    cast,
    crew,
    title,
    videoId,
    loadingImage,
    headlineDescription: { headlineDescription },
    bodyText,
    mediaSection,
    related,
  } = data.contentfulCaseStudy

  return (
    <Layout>
      <Seo title={title} />
      <div className="case-page">
        <div className="case-heading">
          <h1>{title}</h1>
          <h2>{headlineDescription}</h2>
        </div>
        <div className="case-study-body">
          <div className="case-header-video">
            <VideoWithCover
              coverImage={loadingImage}
              videoId={videoId}
              title={title}
            />
          </div>
          {bodyText && <p className="case-body-text">{bodyText.bodyText}</p>}
          {mediaSection && (
            <div className="media-section">
              {mediaSection.map((item, index) => {
                if (item.image) {
                  return (
                    <FadeIn key={index}>
                      <GatsbyImage
                        image={item.image.gatsbyImageData}
                        alt={item.image.description || item.image.title}
                        className="single-column-image"
                      />
                    </FadeIn>
                  )
                } else if (item.images) {
                  return (
                    <div className="two-column-image-container">
                      {item.images.map((image, index) => (
                        <FadeIn key={index} additionalClass="two-column-image">
                          <GatsbyImage
                            image={image.gatsbyImageData}
                            alt={image.description || image.title}
                          />
                        </FadeIn>
                      ))}
                    </div>
                  )
                } else {
                  return (
                    <FadeIn additionalClass="media-video-module">
                      <VideoWithCover
                        coverImage={item.coverPhoto}
                        videoId={item.videoId}
                        vertical={item.vertical}
                        title={item.title}
                      />
                    </FadeIn>
                  )
                }
              })}
            </div>
          )}
          <div className="case-crew-cast">
            <h3>Crew</h3>
            {crew &&
              crew.map((item, index) =>
                item.link ? (
                  <a
                    key={index}
                    href={item.link}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {item.nameAndTitle}
                  </a>
                ) : (
                  <p>{item.nameAndTitle}</p>
                )
              )}
          </div>
          <div className="case-crew-cast">
            <h3>Cast</h3>
            {cast &&
              cast.map((item, index) =>
                item.link ? (
                  <a
                    key={index}
                    href={item.link}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {item.nameAndTitle}
                  </a>
                ) : (
                  <p>{item.nameAndTitle}</p>
                )
              )}
          </div>
        </div>
      </div>
      <div className="related">
        <h3>Related Projects</h3>
        <div className="post-container">
          {related &&
            related.map(post => (
              <WorkPreview data={post} key={post.id} featured />
            ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query getSingleCasStudy($title: String) {
    contentfulCaseStudy(title: { eq: $title }) {
      id
      title
      videoId
      tags
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
      cast {
        ... on ContentfulCastCrewMember {
          nameAndTitle
          link
        }
      }
      crew {
        ... on ContentfulCastCrewMember {
          nameAndTitle
          link
        }
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
          title
          coverPhoto {
            gatsbyImageData(placeholder: BLURRED)
            title
            description
          }
        }
      }
      related {
        id
        title
        videoId
        loadingImage {
          gatsbyImageData(placeholder: BLURRED)
          title
          description
        }
      }
    }
  }
`

export default CaseStudyPage
