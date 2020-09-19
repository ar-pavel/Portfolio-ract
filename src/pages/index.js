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
      <h2 style={{ color: "orange", paddingTop: 50 }}>About</h2>
      <About />
      <h2 style={{ color: "orange", paddingTop: 100 }}>
        CompetitiveProgramming
      </h2>
      <CompetitiveProgramming />
      <h2 style={{ color: "orange", paddingTop: 50 }}>Volunteering</h2>
      <Volunteering />
      <h2 style={{ color: "orange", paddingTop: 50 }}>Projects</h2>
      <Project />
    </div>
  </Layout>
)

export default IndexPage
