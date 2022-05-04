import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import FadeIn from "./fadeIn"

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

  return (
    <div className="process">
      {processes.map(item => (
        <FadeIn key={item.title} additionalClass="process-item">
          <div className="process-text">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        </FadeIn>
      ))}
    </div>
  )
}

export default Process
