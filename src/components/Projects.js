import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "./Card"

const Project = () => (
  <div className="page">
    <SEO title="Projects" />
    <h1>Project Showcase</h1>
    <div>
      <Card
        name="Subnet Calculator"
        title="SUBMAX"
        description="VLSM or Variable Length Subnet Masking is a process of allocating subnet masks where the length is not restricted by IP classes. It allows subdividing a subnet for more optimal usage and less IP wastage. ASAS This app helps user calculate optimal subnet allocation."
        live="https://submaxvlsm.herokuapp.com/"
        src="https://github.com/ar-pavel/SUBMAX"
      />
      <Card
        name="WC-University-Portal"
        title="WC University Management System"
        description="WC University is an Imginary University and this project is to manage this university. There are 7 microservices for backend and a vaadin based front-end(under development) to maitain this system."
        live="http://ar-pavel.me/WC-University-Portal/"
        src="https://github.com/ar-pavel/WC-University-Portal"
      />
      <Card
        name="Reversi-OthelloGame"
        title="Reversi-Othello"
        description="Reversi Rules Reversi (also known as Othello) is a pretty simple game. It consists of a 8x8 square board, and pieces with one black and one white side. Each player has a color, and the aim of the game is to get more of your pieces on the board than the opponent's pieces."
        live="https://github.com/ar-pavel/Reversi-Othello"
        src="https://github.com/ar-pavel/Reversi-Othello"
      />
      <Card
        name="Snake-Game"
        title="Snake Game"
        description="Snake game developed with javaAWT that consider each cell as a square and the snake is an array of the squares."
        live="https://github.com/ar-pavel/Snake-Game"
        src="https://github.com/ar-pavel/Snake-Game"
      />

      <Card
        name="Automatic-Ticket-Generator-With-Automated-QR-Code"
        title="Automatic-Ticket-Generator-With-Automated-QR-Code"
        description="Generates ticket according to provided ticket `image` template  and read data from `CSV`  . "
        live="https://github.com/ar-pavel/Automatic-Ticket-Generator-With-Automated-QR-Code/blob/master/README.md"
        src="https://github.com/ar-pavel/Automatic-Ticket-Generator-With-Automated-QR-Code/blob/master/README.md"
      />
    </div>{" "}
  </div>
)

export default Project
