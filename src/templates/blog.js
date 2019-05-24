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
      publishedDate(fromNow: true, locale: "en")
      richTextBody {
        json
      }
    }
    allContentfulAsset {
      edges {
        node {
          contentful_id
          fluid(maxWidth: 613) {
            base64
            tracedSVG
            aspectRatio
            src
            srcSet
            sizes
          }
          fixed {
            base64
            tracedSVG
            aspectRatio
            width
            height
            src
            srcSet
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
        console.log(alt)
        console.log(node.data)
        // console.log(props.data.allFile.edges[0].node.childImageSharp.fluid)
        console.log(props.data.allFile)
        console.log(props.data.contentfulAsset)
        console.log(props.data.contentfulBlogPost)
        console.log(props.data.allContentfulAsset)
        console.log(props.data.allContentfulAsset.edges[0].node.fixed)
        console.log(props.data.allContentfulAsset.edges[0].node.fluid.sizes)
        console.log(props.data.allContentfulAsset.edges)
        console.log(props.data.allContentfulAsset.edges[0].node.contentful_id)
        console.log(node.data)
        const testID = node.data.target.sys.space.sys.id
        console.log(testID)
        console.log(node.data.target.sys.id)
        console.log(node.data.target.fields.file["en-US"].url)
        // console.log(props.data.allContentfulAsset.edges.node.id[0])
        return (
          <div className="OptionsBlock">
            <Img
              fluid={props.data.allContentfulAsset.edges[0].node.fluid}
              alt={alt}
              id={testID}
              base64={props.data.allContentfulAsset.edges[0].node.fluid.base64}
              tracedSVG={props.data.allContentfulAsset.edges[0].node.fluid.tracedSVG}
              aspectRatio={props.data.allContentfulAsset.edges[0].node.fluid.aspectRatio}
              src={props.data.allContentfulAsset.edges[0].node.fluid.src}
              srcSet={props.data.allContentfulAsset.edges[0].node.fluid.srcSet}
            />
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
