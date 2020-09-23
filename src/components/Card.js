import React from "react"
import Image from "./image"

// TODO: replace static variables with props properties

const Card = ({ name, title, description, src, live }) => (
  <>
    <div className="card">{/* <p style={{ color: "red" }}>{name}</p> */}</div>

    <div class="row">
      <div class="col-lg-4 col-sm-12">
        <div class="project-wrapper__text" data-sr-id="9">
          <h3 class="project-wrapper__text-title">{title}</h3>
          <div>
            <p class="mb-4">{description}</p>
          </div>
          <a target="_blank" class="cta-btn cta-btn--live" href={live}>
            See Live
          </a>
          <a target="_blank" class="cta-btn cta-btn--src" href={src}>
            Source Code
          </a>
        </div>
      </div>
      {/*  <div class="col-lg-8 col-sm-12">
        <div class="project-wrapper__image" data-sr-id="12">
          <a href="#!" target="_blank">
            <div data-tilt="" class="thumbnail rounded">
              <img
                class="img-fluid"
                src="assets/project.5ad6096036391d70f3f8cdadc5937cf4.jpg"
              />
            </div>
          </a>
        </div>
      </div> */}
    </div>
  </>
)

export default Card
