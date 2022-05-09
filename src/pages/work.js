import React from "react"
import AllWork from "../components/allwork"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Work = ({location}) => {
  return (
    <Layout location={location}>
      <Seo title="Work" />
      <AllWork />
    </Layout>
  )
}

export default Work
