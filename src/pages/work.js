import React, { useEffect } from "react"
import gsap from "gsap"
import AllWork from "../components/allwork"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Work = ({ transitionStatus }) => {
  useEffect(() => {
    gsap.to(".works-list", {
      autoAlpha: 1,
      duration: 1,
    })
  }, []) //THIS IS RUN THE FIRST TIME THE SITE IS OPENED

  useEffect(() => {
    if (transitionStatus === "entering") {
      gsap.to(".works-list", {
        autoAlpha: 1,
        duration: 1, //if we are entering the page, let's make the div with class .hometex visible in one second
      })
    }
    if (transitionStatus === "exiting") {
      gsap.to(".works-list", { autoAlpha: 0, duration: 1 }) //if we are exiting  the page, let's make the div with class .hometex transparent in one second
    }
  }, [transitionStatus])

  return (
    <Layout>
      <Seo title="Work" />
      <AllWork />
    </Layout>
  )
}

export default Work
