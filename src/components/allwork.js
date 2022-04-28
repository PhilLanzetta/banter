import React from "react"
import { useStaticQuery, graphql} from "gatsby"
import WorkPreview from "./workPreview"

const query = graphql`
  {
    allContentfulCaseStudy(sort: { fields: title, order: ASC }) {
      nodes {
        videoId
        title
        id
        loadingImage {
          gatsbyImageData
        }
      }
    }
  }
`

const AllWork = () => {
  const data = useStaticQuery(query)
  const works = data.allContentfulCaseStudy.nodes
  return (
    <div className="works-list">
      {works.map(work => (
        <WorkPreview data={work} key={work.id} />
      ))}
    </div>
  )
}

export default AllWork
