import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import WorkPreview from "./workPreview"

const query = graphql`
  {
    contentfulCaseStudiesPage {
      caseStudies {
        id
        loadingImage {
          gatsbyImageData(placeholder: BLURRED)
          title
          description
        }
        title
        videoId
      }
    }
  }
`

const FeaturedWork = () => {
  const data = useStaticQuery(query)
  const works = data.contentfulCaseStudiesPage.caseStudies
  return (
    <div className="featured-works-list">
      {works.map(work => (
        <WorkPreview data={work} key={work.id} featured />
      ))}
    </div>
  )
}

export default FeaturedWork
