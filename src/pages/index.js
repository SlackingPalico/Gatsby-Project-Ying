import React from "react"
import Head from "../components/head"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Slideshow from "../components/slideshow"
import "../components/slideshow.scss"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home"/>
      <Hero />
      <Slideshow />
    </Layout>
  )
}

export default IndexPage
