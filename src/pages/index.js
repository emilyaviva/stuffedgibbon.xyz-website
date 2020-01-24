import React from "react"
import { Link } from "gatsby"
import SiteFooter from "../components/siteFooter"
import "./index.scss"

import serverIcon from "../images/server-icon.svg"
import computerIcon from "../images/computer-icon.svg"
import handsIcon from "../images/hands-icon.svg"

export default () => (
  <main>
    <header>
      <h1>Stuffed Gibbon</h1>
      <h2>Software with compassion and energy</h2>
    </header>

    <div className="grid-wrapper">
      <div className="grid-item">
        <img src={serverIcon} alt="Server Icon" />
        <h3>Back-end development</h3>
        <p>
          Back-end REST and GraphQL API generation using the lastest tools,
          microservice architectures, and other stuff
        </p>
      </div>
      <div className="grid-item">
        <img src={computerIcon} alt="Computer Icon" />
        <h3>Front-end development</h3>
        <p>
          Client-side applications written in cutting-edge JavaScript, React,
          utilizing progressive technology
        </p>
      </div>
      <div className="grid-item">
        <img src={handsIcon} alt="Tech Hands Icon" />
        <h3>Our Vision</h3>
        <p>
          Software developed in collaboration with you, to suit all kinds of
          needs, from small personal sites to large e-commerce platforms
        </p>
      </div>
    </div>

    <nav>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/github">GitHub</Link>
        </li>
        <li>
          <Link to="/fun">Fun Stuff</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>

    <SiteFooter />
  </main>
)
