import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header class="main-header">
    <h1>
      <a href="/">Europa</a>
    </h1>
    <hr />
    <nav class="main-nav">
      <ul class="nav-links">
        <li class="nav-link">
          <a href="/">Home</a>
        </li>
        <li class="nav-link">
          <a href="/about">About</a>
        </li>
        <li class="nav-link">
          <a href="/skill">Skill</a>
        </li>
        <li class="nav-link" >
          <a href="/portfolio">Portfolio</a>
        </li>
        <li class="nav-link">
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
