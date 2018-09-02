import React from 'react'
import Link from 'gatsby-link'
import './Header.css'
// import logo from '../images/circle_funghi.svg'


//reuse component such as header

const Header = ({ siteTitle }) => (
  <div>
    <div className="Header">
      <div className="HeaderGroup">
        <Link to="/"><img src="https://cl.ly/476408c2f409/circle_funghi.png" width="50" /></Link>
        {/* <Link to="/"><img src={require('../images/circle_funghi.png')} width="35" /></Link> */}
        <Link to="/">Works</Link>
        <Link to="/About">About</Link>
        <Link to="/">Dribbble</Link>
        <Link to="/">Medium</Link>
        <Link to="/">Linkedin</Link>
        <Link to="/">Twitter</Link>
      </div>
    </div>
  </div>
)

export default Header
