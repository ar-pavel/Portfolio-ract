import React from "react"
import Image from "./image"

const About = () => (
  <>
    <div className="page">
      <div style={{ float: "none", marginBottom: "200px" }}>
        <div>
          <Image />
        </div>
        <div>
          <p className="narration">
            <h5>Narrative</h5>
            <p>
              I'm Atikur Rahman aka Pavel. Currently pursuing a bachelor's
              degree from <em> No-Name University</em>.
            </p>
            <p>
              I love to take challenges and solve problems that give some spicy
              spikes on my neurons . Currently I'm fully on Competitive
              Programming and exploring algorithms and data-structures.{" "}
            </p>

            <p>
              I also love to develop operations and sometimes operate
              development. Mainly I use <em>C++</em> but I also have occasional
              flings with <em>Java, Python, C</em> and now learning{" "}
              <em>JavaScript</em> in a mentorship program of{" "}
              <a
                href="https://durbinlabs.com/"
                style={{ textDecoration: "none" }}
              >
                Durbin Labs Ltd.
              </a>
            </p>
          </p>
        </div>
      </div>
    </div>
  </>
)

export default About
