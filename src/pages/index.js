import React from "react"

import SEO from "../components/seo"
import About from "../components/About"
import CompetitiveProgramming from "../components/CompetitiveProgramming"
import Volunteering from "../components/Volunteering"
import Project from "../components/Projects"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h2 style={{ color: "orange", paddingTop: 0, marginTop: 0 }}>About</h2>
      <div style={{ overflow: "hidden", paddingTop: 0 }}>
        <About />
      </div>
      <div style={{ overflow: "hidden" }}>
        <h2 style={{ color: "orange", paddingTop: 100 }}>
          CompetitiveProgramming
        </h2>
        <CompetitiveProgramming />
      </div>
      <div style={{ overflow: "hidden" }}>
        <h2 style={{ color: "orange", paddingTop: 50 }}>Volunteering</h2>
        <Volunteering />
      </div>
      <div style={{ overflow: "hidden" }}>
        <h2 style={{ color: "orange", paddingTop: 50 }}>Projects</h2>
        <Project />
      </div>
    </div>
  </Layout>
)

export default IndexPage
