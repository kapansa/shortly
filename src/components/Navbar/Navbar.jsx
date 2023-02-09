import React from 'react'
// import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import "./Navbar.css";

function Navbar() {
  return (
    <div>

      <header>

        <div className='left'>
          <img src={Logo} alt='Shortly' />
          <ul>
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>
        </div>

        <div className='right'>
          <ul>
            <li>Login</li>
            <li id='sign-up'>Sign Up</li>
          </ul>
        </div>

      </header>

    </div>
  )
}

export default Navbar
