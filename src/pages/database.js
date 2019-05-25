import React from "react"
import Head from "../components/head"
import Layout from "../components/layout"
import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import DatabaseStyles from "./database.module.scss"

const ImageBackground = styled(BackgroundImage)`
  padding: 50px;
  height: 85.8vh;
`

const Database = () => {
  const data = useStaticQuery(graphql`
    query {
      allMysqlCountry {
        edges {
          node {
            idFieldName
            name
          }
        }
      }
      image: file(relativePath: { eq: "posts/images/background-image.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      site {
        siteMetadata {
          siteAuthor
        }
      }
    }
  `)

  console.log(data)
  console.log(data.image.sharp)

  return (
    <Layout>
      <Head title="Database" />
      <ImageBackground
        Tag="section"
        fluid={data.image.sharp.fluid}
      >
        <div className={DatabaseStyles.database__content}>
          <h1 className={DatabaseStyles.database__heading}>Database Data</h1>
          <ul className={DatabaseStyles.database__ul}>
            {data.allMysqlCountry.edges.map((edge, index) => {
              return (
                <li key={index}>
                  <h3>{edge.node.name}</h3>
                  <p>{edge.node.idFieldName}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </ImageBackground>
    </Layout>
  )
}

export default Database
