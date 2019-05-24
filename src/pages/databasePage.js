import React from "react"
import Head from "../components/head"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"

const databasePage = () => {
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
    }
  `)

  console.log(data)

  return (
    <Layout>
      <Head title="databasePage" />
      <div>
        <h1>Database Page</h1>
        <ul>
          {data.allMysqlCountry.edges.map((edge, index) => {
            return (
              <li key={index}>
                <h2>{edge.node.name}</h2>
                <p>{edge.node.idFieldName}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </Layout>
  )
}

export default databasePage
