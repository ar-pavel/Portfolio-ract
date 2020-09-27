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
              I'm Atikur Rahman aka Pavel. A dreamer with high hopes. Currently
              pursuing a bachelor's degree from{" "}
              <em> Southeast University in Computer Science and Engineering</em>
              .
            </p>
            <p>
              I love to take challenges and solve problems that give some spicy
              spikes on my neurons . Currently I'm fully on Competitive
              Programming and exploring algorithms and data-structures.{" "}
            </p>

            <p>
              I also love to develop operations and sometimes operate
              development. Mainly I use <em>C++</em> but I also have occasional
              flings with <em>Java, Python, C</em> and getting hand dirty with{" "}
              <em>JavaScript</em>.
            </p>
          </p>
        </div>
      </div>
    </div>
  </>
)

export default About
