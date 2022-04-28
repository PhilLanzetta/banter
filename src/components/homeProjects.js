import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import WorkPreview from "./workPreview"

const query = graphql`
  {
    contentfulHomePageProjects {
      projects {
        title
        videoId
        loadingImage {
          gatsbyImageData
          id
        }
      }
    }
  }
`

const HomeProjects = () => {
  const data = useStaticQuery(query)
  const works = data.contentfulHomePageProjects.projects
  return (
    <div className="home-projects">
      <h2>Recent Projects</h2>
      <div className="works-list home">
        {works.map(work => (
          <WorkPreview data={work} key={work.id} home />
        ))}
      </div>
    </div>
  )
}

export default HomeProjects
