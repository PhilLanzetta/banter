import React from "react"
import AllWork from "../components/allwork"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Work = () => {
  return (
    <Layout>
      <Seo title="Work" />
      <AllWork />
    </Layout>
  )
}

export default Work
