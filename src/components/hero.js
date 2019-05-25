import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import "../components/hero.scss"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <header className="showcase">
      <div className="container showcase-inner">
        <h1>Welcome</h1>
        <h2>{data.site.siteMetadata.title}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae,
          amet fugit. Suscipit quos doloremque est placeat in velit distinctio
          tempora.
        </p>
        <Link className="btn" to="/contact">
          Read More
        </Link>
      </div>
    </header>
  )
}

export default Hero
