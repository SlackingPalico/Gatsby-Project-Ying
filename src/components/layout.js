import React from "react"
import Footer from "./footer"
import Header from "./header"
import "../styles/index.scss"
import "../components/header.scss"
import "../components/footer.scss"
import "../components/layout.scss"

const Layout = props => {
  return (
    <div>
      <div>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
