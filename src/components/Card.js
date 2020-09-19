import React from "react"
import Image from "./image"

const Card = ({ props }) => (
  <>
    <div className="card">
      <p style={{ color: "red" }}>{props}</p>
    </div>
  </>
)

export default Card
