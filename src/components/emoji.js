import React from "react"

const emoji = props => {
  return (
    <span role="img" aria-label="emoji">
      {props.emoji}
    </span>
  )
}

export default emoji
