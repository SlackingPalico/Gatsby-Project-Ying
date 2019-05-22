import React from "react"
import Head from "../components/head"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import blogStyles from "./blog.module.scss"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
  query {
    allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
      edges {
        node {
          textFieldTitle
          slug
          publishedDate(fromNow: true, locale: "sv")
        }
      }
    }
  }
`)

  console.log(data)

  return (
    <Layout>
      <Head title="Blog"/>
      <h1 className={blogStyles.mainTitle}>Blog</h1>
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map((edge, index) => {
          return (
            <li className={blogStyles.post} key={index}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h2>{edge.node.textFieldTitle}</h2>
                {/* <p>{edge.node.excerpt}</p> */}
                <p className={blogStyles.date}>{edge.node.publishedDate}</p>
                {/* <p>{edge.node.timeToRead} minutes reading time</p> */}
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
