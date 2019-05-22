import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        siteAuthor
      }
    }
  }
`)
  return (
    <footer className="footer__container">
      <div className="footer__container__content">
        <p>Created by {data.site.siteMetadata.siteAuthor}, &copy; 2019</p>
      </div>
    </footer>
  )
}

export default Footer
