import React from 'react';
import Divider from '@mui/material/Divider';


function NavLinks() {
  
  return (
    <ul className='navbar-nav  mx-auto'>
      <li className='nav-item mx-2'>
        <a href="/Appointment_System_for_Hospitals/" className={`nav-link ${window.location.pathname === '/Appointment_System_for_Hospitals/' ? 'active' : ''} `}>Home</a>
      </li>
      <Divider orientation='vertical' flexItem className='mx-2' />
      <li className='nav-item mx-2'>
        <a href="/Appointment_System_for_Hospitals/Services" className={`nav-link ${window.location.pathname === '/Appointment_System_for_Hospitals/Services' ? 'active' : ''} `} >Services</a>
      </li>
      <Divider orientation='vertical' flexItem className='mx-2' />
      <li className='nav-item mx-2'>
        <a href="/Appointment_System_for_Hospitals/FindDoctor" className={`nav-link ${window.location.pathname === '/Appointment_System_for_Hospitals/FindDoctor' ? 'active' : ''} `} >Find a doctor</a>
      </li>
      <Divider orientation='vertical' flexItem className='mx-2' />
      <li className='nav-item mx-2'>
        <a href="/Appointment_System_for_Hospitals/About" className={`nav-link ${window.location.pathname === '/Appointment_System_for_Hospitals/About' ? 'active' : ''} `} >About us</a>
      </li>
      <Divider orientation='vertical' flexItem className='mx-2' />
    </ul>
  )
}

export default NavLinks
