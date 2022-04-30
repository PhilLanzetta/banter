import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const CaseStudyPage = ({ data }) => {
  const {
    cast,
    crew,
    title,
    videoId,
    headlineDescription: { headlineDescription },
  } = data.contentfulCaseStudy
  return (
    <Layout>
      <div className="case-page">
        <div className="case-heading">
          <h1>{title}</h1>
          <h2>{headlineDescription}</h2>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query getSingleCasStudy($title: String) {
    contentfulCaseStudy(title: {eq: $title}) {
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
        }
      }
    }
  }
`

export default CaseStudyPage
