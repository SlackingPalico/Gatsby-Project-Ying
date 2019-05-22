import React from "react"
import Head from "../components/head"
import { Link } from "gatsby"
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About"/>
      <h1>About</h1>
      <p>Want to work with me? <Link to="/contact">Reach out</Link></p>
      <p>More about me <a href="https://github.com/kirekire95" rel="noopener noreferrer" target="_blank">here</a></p>
    </Layout>
  )
}

export default AboutPage
