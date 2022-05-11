import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import WorkPreview from "./workPreview"

const query = graphql`
  {
    contentfulWorkPage {
      caseStudies {
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

const AllWork = () => {
  const data = useStaticQuery(query)
  const works = data.contentfulWorkPage.caseStudies
  return (
    <div className="works-list">
      {works.map(work => (
        <WorkPreview data={work} key={work.id} />
      ))}
    </div>
  )
}

export default AllWork
