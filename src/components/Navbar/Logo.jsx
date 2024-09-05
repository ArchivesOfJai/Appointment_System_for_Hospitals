import React from 'react';
import logo from "../../assets/Logo.png";
import "../../Css/Navbar/logo.css";

function Logo() {
  return (

    <a href='/' className='navbar-brand logoContainer'>
      <img src={logo} alt="logo" />
      <span>MedEase</span>
    </a>
  )
}

export default Logo;
