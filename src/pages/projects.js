import React, { useEffect } from "react"
import Layout from "../components/layout"
import FeaturedWork from "../components/featuredWork"
import gsap from "gsap"
import Seo from "../components/seo"

const CaseStudies = ({ transitionStatus }) => {
  useEffect(() => {
    gsap.to(".featured-works-list", {
      autoAlpha: 1,
      duration: 1,
    })
  }, []) //THIS IS RUN THE FIRST TIME THE SITE IS OPENED

  useEffect(() => {
    if (transitionStatus === "entering") {
      gsap.to(".featured-works-list", {
        autoAlpha: 1,
        duration: 1, //if we are entering the page, let's make the div with class .hometex visible in one second
      })
    }
    if (transitionStatus === "exiting") {
      gsap.to(".featured-works-list", { autoAlpha: 0, duration: 1 }) //if we are exiting  the page, let's make the div with class .hometex transparent in one second
    }
  }, [transitionStatus])

  return (
    <Layout>
      <Seo title="Case Studies" />
      <FeaturedWork />
    </Layout>
  )
}

export default CaseStudies
