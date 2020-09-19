import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: "brown",
      marginBottom: `1.45rem`,
      position: "sticky",
      top: 0,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0, marginBottom: 20 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>

      <span className="menubar">
        <h4>
          <Link to="/about" style={{ color: "orange", textDecoration: "none" }}>
            about
          </Link>
        </h4>

        <h4>
          <Link
            to="/competitiveProgramming"
            style={{ color: "orange", textDecoration: "none" }}
          >
            competitive programming
          </Link>
        </h4>

        <h4>
          <Link
            to="/volunteering"
            style={{ color: "orange", textDecoration: "none" }}
          >
            volunteering
          </Link>
        </h4>

        <h4>
          <Link
            to="/projects"
            style={{ color: "orange", textDecoration: "none" }}
          >
            projects
          </Link>
        </h4>
      </span>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
