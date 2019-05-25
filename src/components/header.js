import React from "react"
import { Link } from "gatsby"
// import GoogleChromeSVG from "../../public/images/GoogleChrome.svg"

const Header = () => {
  return (
    <nav>
      <div className="navbar">
        <ul className="navbar__ul">
          {/* <li>
            <Link className="navbar__link" activeClassName="navbar__linkActive" to="/">
              <img className="GoogleChrome" src={GoogleChromeSVG} alt="hehe" />
            </Link>
          </li> */}
          <li>
            <Link
              className="navbar__link"
              activeClassName="navbar__linkActive"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="navbar__link"
              activeClassName="navbar__linkActive"
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className="navbar__link"
              activeClassName="navbar__linkActive"
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="navbar__link"
              activeClassName="navbar__linkActive"
              to="/contact"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              className="navbar__link"
              activeClassName="navbar__linkActive"
              to="/database"
            >
              Database
            </Link>
          </li>
        </ul>
      </div>

      <div className="menu-wrap">
        <input className="toggler" type="checkbox" />
        <div className="hamburger">
          <div />
        </div>
        <div className="menu">
          <div>
            <div>
              <ul>
                <li>
                  <Link className="menu__link" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="menu__link" to="/blog">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link className="menu__link" to="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="menu__link" to="/contact">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link className="menu__link" to="/database">
                    Database
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
