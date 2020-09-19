import React from "react"
import Icon from "./icon"

const Logo = props => {
  return (
    <React.Fragment>
      <Icon size="40px" />
      <span
        style={{
          fontFamily: `'Lexend Deca', sans-serif`,
          fontSize: "24px",
          color: "var(--quizden-light)",
          display: "inline-block",
          verticalAlign: "middle",
          paddingLeft: "8px",
        }}
      >
        {props.text}
      </span>
    </React.Fragment>
  )
}

export default Logo
