import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Icon from "./icon"
import getIcon from "./getIcon"

const Footer = ({ siteTitle }) => (
  <footer className="footer">
    <p className="socialMedia">
      <h5 style={{ margin: 7 }}>Catch me on:</h5>

      <a
        href="https://github.com/ar-pavel"
        style={{ paddingRight: 50, textDecoration: "none" }}
      >
        <Icon name="github" icon={getIcon("github")} />
      </a>

      <a
        href="https://www.linkedin.com/in/ar-pavel/"
        style={{ paddingRight: 50, textDecoration: "none" }}
      >
        <Icon name="linkedin" icon={getIcon("linkedin")} />
      </a>

      <a
        href="https://www.facebook.com/hibernatingdaemon"
        style={{ paddingRight: 50, textDecoration: "none" }}
      >
        <Icon name="facebook" icon={getIcon("facebook")} />
      </a>

      <a href="" style={{ paddingRight: 50, textDecoration: "none" }}>
        <Icon name="instagram" icon={getIcon("instagram")} />
      </a>
    </p>
    © {new Date().getFullYear()}, Built with ❤️ by
    {` `}
    <a href="http://www.ar-pavel.me">Pavel</a>
  </footer>
)

export default Footer
