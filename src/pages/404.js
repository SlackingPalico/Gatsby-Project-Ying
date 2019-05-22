import React from "react"
import Head from "../components/head"
import { Link } from "gatsby"
import Layout from "../components/layout"

const NotFound = () => {
  return (
    <Layout>
      <Head title="Page not found"/>
      <h1>Page not found!</h1>
      <p><Link to="/">Head home</Link></p>
    </Layout>
  )
}

export default NotFound
