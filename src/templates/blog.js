import React from "react"
import Head from "../components/head"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Img from "gatsby-image"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      textFieldTitle
      publishedDate(fromNow: true, locale: "sv")
      richTextBody {
        json
      }
    }
    
    imageOne: file(relativePath: { eq: "posts/header.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    allFile(
      filter: {
        extension: { regex: "/(jpeg|jpg|gif|png)/" }
        sourceInstanceName: { eq: "src" }
      }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const Blog = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        // const url = node.data.target.fields.file["en-US"].url
        return (
          <div className="OptionsBlock">
            <Img fluid={props.data.imageOne.childImageSharp.fluid} alt={alt} />
            {/* <img className="InsertedImage" src={url} alt={alt} /> */}
          </div>
        )
      },
    },
  }
  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.textFieldTitle} />
      <h1>{props.data.contentfulBlogPost.textFieldTitle}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
      {documentToReactComponents(
        props.data.contentfulBlogPost.richTextBody.json,
        options
      )}
    </Layout>
  )
}

export default Blog
