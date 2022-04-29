import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import WorkPreview from "./workPreview"

const query = graphql`
  {
    allContentfulCaseStudy(
      filter: { featured: { eq: true } }
      sort: { fields: title, order: ASC }
    ) {
      nodes {
        videoId
        id
        title
        loadingImage {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  }
`

const FeaturedWork = () => {
  const data = useStaticQuery(query)
  const works = data.allContentfulCaseStudy.nodes
  return (
    <div className="works-list">
      {works.map(work => (
        <WorkPreview data={work} key={work.id} featured />
      ))}
    </div>
  )
}

export default FeaturedWork
