import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage } from "gatsby-plugin-image"
import VideoWithCover from "../components/videoWithCover"
import WorkPreview from "../components/workPreview"
import FadeIn from "../components/fadeIn"
import Seo from "../components/seo"

const CaseStudyPage = ({ data, location }) => {
  const {
    cast,
    crew,
    title,
    headlineDescription: { headlineDescription },
    mediaSection,
    related,
  } = data.contentfulCaseStudy

  return (
    <Layout location={location}>
      <Seo title={title} />
      <div className="case-page">
        <div className="case-heading">
          <h1>{title}</h1>
          <h2>{headlineDescription}</h2>
        </div>
        <div className="case-study-body">
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
                    <div className="two-column-image-container" key={index}>
                      {item.images.map((image, index) => (
                        <FadeIn key={index} className="two-column-image">
                          <GatsbyImage
                            image={image.gatsbyImageData}
                            alt={image.description || image.title}
                          />
                        </FadeIn>
                      ))}
                    </div>
                  )
                } else if (item.pullQuote) {
                  return (
                    <FadeIn key={index}>
                      <p className="case-body-text">{item.pullQuote}</p>
                    </FadeIn>
                  )
                } else {
                  console.log(item)
                  return (
                    <FadeIn
                      className={`${
                        item.vertical || item.square
                          ? "media-video-vertical"
                          : ""
                      }`}
                      key={index}
                    >
                      <VideoWithCover
                        coverImage={item.coverPhoto}
                        videoId={item.videoId}
                        vertical={item.vertical}
                        square={item.square}
                        title={item.title}
                        widescreen={item.widescreen}
                      />
                    </FadeIn>
                  )
                }
              })}
            </div>
          )}
          {cast && (
            <div className="case-crew-cast">
              <h3>Cast</h3>
              {cast.map((item, index) =>
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
                  <p key={index}>{item.nameAndTitle}</p>
                )
              )}
            </div>
          )}
          {crew && (
            <div className="case-crew-cast">
              <h3>Crew</h3>
              {crew.map((item, index) =>
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
                  <p key={index}>{item.nameAndTitle}</p>
                )
              )}
            </div>
          )}
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
      headlineDescription {
        headlineDescription
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
          square
          widescreen
          title
          coverPhoto {
            gatsbyImageData(placeholder: BLURRED)
            title
            description
          }
        }
        ... on ContentfulPullQuote {
          pullQuote
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
