import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import slugify from "slugify"
import { Link } from "gatsby"

const RelatedPosts = ({ posts }) => {
  return (
    <div className="related">
      <h3>Related Projects</h3>
      <div className="post-container">
        {posts.map(post => {
          const {
            loadingImage,
            headlineDescription: { headlineDescription },
            title,
            id,
          } = post
          const slug = slugify(title, { lower: true, strict: true })
          return (
            <div className="post" key={id}>
              <Link to={`/${slug}`}>
                <GatsbyImage
                  image={loadingImage.gatsbyImageData}
                  alt={loadingImage.description || loadingImage.title}
                />
              </Link>
              <h3>{title}</h3>
              <p>{headlineDescription}</p>
              <Link
                to={`/${slug}`}
                className="hover-underline-animation-full black"
              >
                VIEW PROJECT →
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default RelatedPosts
