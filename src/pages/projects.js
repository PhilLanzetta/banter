import React from "react"
import Layout from "../components/layout"
import FeaturedWork from "../components/featuredWork"
import Seo from "../components/seo"

const CaseStudies = ({location}) => {
  return (
    <Layout location={location}>
      <Seo title="Case Studies" />
      <FeaturedWork />
    </Layout>
  )
}

export default CaseStudies
