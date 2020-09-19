import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const CompetitiveProgramming = () => (
  <>
    <div className="page" style={{ paddingTop: "100px" }}>
      <SEO title="Competitive Programming" />
      <div>
        <p className="icpc">
          <h3>International Collegiate Programming Contest</h3>
          <a
            href="https://icpc.global/ICPCID/W4ZDEXF1RSQR"
            style={{ textDecoration: "none" }}
          >
            <h4 style={{ textDecoration: "none", marginBottom: 7 }}>
              Dhaka Regional 2020
            </h4>
          </a>
          <p>
            Asia Dhaka Regional Site Online Preliminary Contest <br></br>
            Team: SEU_LegacyLeavers, rank: 165, One-hundred Sixty-fifth Place
          </p>
          <p>
            The 2020 ICPC Asia Dhaka Regional Contest <br></br>
            Team: SEU_LegacyLeavers, rank: 38, Thirty-eighth Place
          </p>
        </p>

        <p className="ncpc" style={{ marginTop: 50, marginBottom: 10 }}>
          <h3>National Programming Contests</h3>
          <h4
            style={{ textDecoration: "none", marginBottom: 7, color: "blue" }}
          ></h4>
          <a
            href="https://algo.codemarshal.org/contests/mist-ncpc-2020/standings"
            style={{ textDecoration: "none" }}
          >
            <h4 style={{ textDecoration: "none", marginBottom: 7 }}>
              {" "}
              MIST NCPC 2020{" "}
            </h4>
          </a>
          <p>Team: SEU_LegacyLeavers, rank: 40, Fourty Place</p>
        </p>

        <p className="iupc" style={{ marginTop: 50, marginBottom: 7 }}>
          <h3>Intra University Programming Contests</h3>
          <p>
            Participated in more than 10 IUPC within the course of 2018-2020.
          </p>
        </p>

        <p className="iupc" style={{ marginTop: 50, marginBottom: 7 }}>
          <h3>Inter University Programming Contests</h3>
          <p>
            <b>Winner</b>, SEU Inter University Junior Programming Contest 2017,{" "}
            <em>Southeast University</em>.
          </p>
          <p>
            <b>First Runner's up</b>, SEU Inter University Programming Contest
            2019, <em>Southeast University</em>.
          </p>
        </p>

        <p className="oj" style={{ marginTop: 50, marginBottom: 10 }}>
          <h3>Online Problem Solving and Contests</h3>
          <a
            href="https://www.stopstalk.com/user/profile/arpavel"
            style={{ textDecoration: "none" }}
          >
            <h4 style={{ textDecoration: "none", marginBottom: 7 }}>
              {" "}
              Online Judge Credentials{" "}
            </h4>
          </a>
          <p>
            {" "}
            Solve problems on multiple online judging sites. Regularly
            participating in different online programming contests and also
            arranging contests for juniors of SEU.
          </p>
        </p>
      </div>
    </div>
  </>
)

export default CompetitiveProgramming
