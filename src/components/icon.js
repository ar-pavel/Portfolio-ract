import React from "react"

const Icon = Props => {
  return (
    <>
      <svg className="icon" viewBox={Props.icon.viewBox}>
        <title>{Props.name}</title>
        <path d={Props.icon.path} />
      </svg>
    </>
  )
}

export default Icon
