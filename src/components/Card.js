import React from "react"
import Image from "./image"

const Card = ({ props }) => (
  <>
    <div className="card">
      <p style={{ color: "red" }}>{props}</p>
    </div>

    <div class="row">
      <div class="col-lg-4 col-sm-12">
        <div class="project-wrapper__text" data-sr-id="9">
          <h3 class="project-wrapper__text-title">Project Title</h3>
          <div>
            <p class="mb-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Excepturi neque, ipsa animi maiores repellendus distinctio aperiam
              earum dolor voluptatum consequatur blanditiis inventore debitis
              fuga numquam voluptate ex architecto itaque molestiae.
            </p>
          </div>
          <a target="_blank" class="cta-btn cta-btn--hero" href="#!">
            See Live
          </a>
          <a target="_blank" class="cta-btn text-color-main" href="#!">
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
