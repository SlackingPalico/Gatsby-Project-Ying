import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export const pageQuery = graphql`
  query HeaderImageQuery {
    headerImage: imageSharp(id: { regex: "/header/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`

const LazyLoad = (props) => {
  return (
    <Img
      className="InsertedImage"
      title="title"
      alt="ha"
      sizes={props.headerImage.sizes}
    />
  )
}

export default LazyLoad
