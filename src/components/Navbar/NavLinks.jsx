import React from 'react';
import Divider from '@mui/material/Divider';


function NavLinks() {
  
  return (
    <ul className='navbar-nav  mx-auto'>
      <li className='nav-item mx-2'>
        <a href="/" className={`nav-link ${window.location.pathname === '/' ? 'active' : ''} `}>Home</a>
      </li>
      <Divider orientation='vertical' flexItem className='mx-2' />
      <li className='nav-item mx-2'>
        <a href="/Services" className={`nav-link ${window.location.pathname === '/Services' ? 'active' : ''} `} >Services</a>
      </li>
      <Divider orientation='vertical' flexItem className='mx-2' />
      <li className='nav-item mx-2'>
        <a href="/FindDoctor" className={`nav-link ${window.location.pathname === '/FindDoctor' ? 'active' : ''} `} >Find a doctor</a>
      </li>
      <Divider orientation='vertical' flexItem className='mx-2' />
      <li className='nav-item mx-2'>
        <a href="/About" className={`nav-link ${window.location.pathname === '/About' ? 'active' : ''} `} >About us</a>
      </li>
      <Divider orientation='vertical' flexItem className='mx-2' />
    </ul>
  )
}

export default NavLinks
