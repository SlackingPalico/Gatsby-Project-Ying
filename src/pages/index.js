import React from "react"
import Head from "../components/head"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Slideshow from "../components/slideshow"
import "../components/slideshow.scss"
// import Img from 'gatsby-image'

const IndexPage = (props) => {
  return (
    <Layout>
      <Head title="Home"/>
      {/* <Img fluid={props.data.imageOne.childImageSharp.fluid} /> */}
      <Hero />
      <Slideshow />
    </Layout>
  )
}

export default IndexPage

// export const pageQuery = graphql`
// query {
//   imageOne: file(relativePath: { eq: "posts/grass.png" }) {
//     childImageSharp {
//       fluid(maxWidth: 1000) {
//         ...GatsbyImageSharpFluid
//       }
//     }
//   }
// }
// `
