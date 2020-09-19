import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Icon from "./icon"
import Emoji from "./emoji"

const Footer = ({ siteTitle }) => (
  <footer className="footer">
    <p className="socialMedia">
      <h5 style={{ margin: 7 }}>Catch me on:</h5>

      <a
        href="https://github.com/ar-pavel"
        style={{ paddingRight: 50, textDecoration: "none" }}
      >
        {/* <Icon image="src/images/github.png" text="github logo" /> GitHub */}
        <Emoji emoji="gh" /> GitHub
      </a>

      <a
        href="https://www.linkedin.com/in/ar-pavel/"
        style={{ paddingRight: 50, textDecoration: "none" }}
      >
        {/* <Icon image="src/images/linkedin.png" text="linkedin logo" /> LinkedIn */}
        <Emoji emoji="li" /> LinkedIn
      </a>

      <a
        href="https://www.facebook.com/hibernatingdaemon"
        style={{ paddingRight: 50, textDecoration: "none" }}
      >
        {/* <Icon /> Facebook */}
        <Emoji emoji="f" /> Facebook
      </a>

      <a href="" style={{ paddingRight: 50, textDecoration: "none" }}>
        {/* <Icon image="../images/instagram.png" text="instagram logo" /> Instagram */}
        <Emoji emoji="-_-" /> Instagram
      </a>
    </p>
    © {new Date().getFullYear()}, Built with ❤️ by
    {` `}
    <a href="http://www.ar-pavel.me">Pavel</a>
  </footer>
)

export default Footer
