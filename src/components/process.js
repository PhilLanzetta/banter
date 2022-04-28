import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Fade from 'react-reveal/Fade'

const Process = () => {
  const data = useStaticQuery(graphql`
    {
      processContent: contentfulAboutProcessJsonNode {
        internal {
          content
        }
      }
    }
  `)

  const { processes } = JSON.parse(data.processContent.internal.content)

  console.log(processes)
  return (
    <div className="process">
      {processes.map(item => (
        <Fade bottom>
          <div key={item.title} className="process-item">
            <div className="process-text">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        </Fade>
      ))}
    </div>
  )
}

export default Process
