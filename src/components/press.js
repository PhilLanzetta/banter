import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Slider from "react-slick"
import { GatsbyImage } from "gatsby-plugin-image"

const query = graphql`
  {
    allContentfulPressItem(sort: { fields: createdAt, order: ASC }) {
      nodes {
        description
        id
        title
        link
        image {
          gatsbyImageData
          description
          title
        }
      }
    }
  }
`

function SampleNextArrow(props) {
  const { onClick } = props
  return (
    <div
      className="image-next press-arrow-right"
      onClick={onClick}
      onKeyDown={onClick}
      role="button"
      tabIndex={0}
      aria-label="go to next"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.617 72.699">
        <g
          id="Group_61"
          data-name="Group 61"
          transform="translate(-1641.773 -5563.813)"
        >
          <line
            id="Line_93"
            data-name="Line 93"
            x2="34.163"
            y2="36.163"
            transform="translate(1642.5 5564.5)"
            fill="none"
            stroke="#000"
            stroke-width="2"
          />
          <line
            id="Line_94"
            data-name="Line 94"
            y1="36.163"
            x2="34.163"
            transform="translate(1642.5 5599.663)"
            fill="none"
            stroke="#000"
            stroke-width="2"
          />
        </g>
      </svg>
    </div>
  )
}

function SamplePrevArrow(props) {
  const { onClick } = props
  return (
    <div
      className="image-prev press-arrow-left"
      onClick={onClick}
      onKeyDown={onClick}
      role="button"
      tabIndex={0}
      aria-label="go to previous"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.617 72.699">
        <g
          id="Group_62"
          data-name="Group 62"
          transform="translate(0.727 0.687)"
        >
          <line
            id="Line_93"
            data-name="Line 93"
            x1="34.163"
            y2="36.163"
            transform="translate(0)"
            fill="none"
            stroke="#000"
            stroke-width="2"
          />
          <line
            id="Line_94"
            data-name="Line 94"
            x1="34.163"
            y1="36.163"
            transform="translate(0 35.163)"
            fill="none"
            stroke="#000"
            stroke-width="2"
          />
        </g>
      </svg>
    </div>
  )
}

const Press = () => {
  const data = useStaticQuery(query)
  const pressItems = data.allContentfulPressItem.nodes
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }
  return (
    <div className="press-container">
      <h2>Recent Press</h2>
      <div className="press-slider-container">
        <Slider {...settings}>
          {pressItems.map(item => (
            <div className="press-item" key={item.id}>
              <GatsbyImage
                image={item.image.gatsbyImageData}
                alt={item.image.description || item.image.title}
              />
              <h3>
                <a href={item.link} rel="noreferrer" target="_blank">
                  {item.title}&#8599;
                </a>
              </h3>
              <p>{item.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Press
