import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { debounce } from "../utilities/helpers"

const AboutIntro = () => {
  const data = useStaticQuery(graphql`
    {
      text: allContentfulAboutHeadingTextNode {
        edges {
          node {
            id
            internal {
              content
            }
          }
        }
      }
    }
  `)
  const [opacity, setOpacity] = useState()

  const handleScroll = debounce(() => {
    const checkpoint = 500
    const currentScrollPos = window.pageYOffset
    if (currentScrollPos <= checkpoint) {
      setOpacity(1 - currentScrollPos / checkpoint)
    } else {
      setOpacity(0)
    }
  }, 0)

  useEffect(() => {
    setTimeout(() => {
      setOpacity(1)
    }, 1000)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  return (
    <div className="about-intro">
      <p style={{ opacity: opacity }}>
        {data.text.edges[0].node.internal.content}
      </p>
    </div>
  )
}

export default AboutIntro
