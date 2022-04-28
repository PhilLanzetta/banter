import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function SampleNextArrow(props) {
  const { onClick } = props
  return (
    <div
      className="image-next"
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
            stroke="#fff"
            stroke-width="2"
          />
          <line
            id="Line_94"
            data-name="Line 94"
            y1="36.163"
            x2="34.163"
            transform="translate(1642.5 5599.663)"
            fill="none"
            stroke="#fff"
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
      className="image-prev"
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
            stroke="#fff"
            stroke-width="2"
          />
          <line
            id="Line_94"
            data-name="Line 94"
            x1="34.163"
            y1="36.163"
            transform="translate(0 35.163)"
            fill="none"
            stroke="#fff"
            stroke-width="2"
          />
        </g>
      </svg>
    </div>
  )
}

const AboutCarousel = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulAbout {
        photoCarousel {
          gatsbyImageData
          id
        }
      }
    }
  `)

  const settings = {
    dots: false,
    infinite: true,
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }
  return (
    <div className="about-carousel">
      <Slider {...settings}>
        {data.contentfulAbout.photoCarousel.map(image => (
          <div className="about-image-slide" key={image.id}>
            <GatsbyImage image={image.gatsbyImageData} />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default AboutCarousel
