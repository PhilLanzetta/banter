import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Fade from "react-reveal/Fade"

const Team = () => {
  const data = useStaticQuery(graphql`
    {
      team: allContentfulTeamMember(sort: { fields: order }) {
        edges {
          node {
            bio {
              internal {
                content
              }
            }
            name
            position
            profilePic {
              gatsbyImageData(placeholder: BLURRED)
            }
            id
          }
        }
      }
    }
  `)

  return (
    <div className="team">
      <h2>Team</h2>
        <div className="team-members-container">
          {data.team.edges.map(member => (
           <Fade bottom>
            <div className="team-member" key={member.node.id}>
              <GatsbyImage
                image={member.node.profilePic.gatsbyImageData}
                alt={member.node.name}
              />
              <div className="team-member-heading">
                <h3>{member.node.name}</h3>
                <h3>{member.node.position}</h3>
              </div>
              <p>{member.node.bio.internal.content}</p>
            </div>
            </Fade>
          ))}
        </div>
    </div>
  )
}

export default Team
