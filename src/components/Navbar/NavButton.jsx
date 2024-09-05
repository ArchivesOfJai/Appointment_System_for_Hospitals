import React from 'react'
import Button from '@mui/material/Button';
import HowToRegRoundedIcon from '@mui/icons-material/HowToRegRounded';
import LoginIcon from '@mui/icons-material/Login';

function NavButton() {
  return (
   <>
    <Button className='mx-2' variant='contained' endIcon={<HowToRegRoundedIcon/>}>Register</Button>
    <Button className='mx-2' variant='contained' endIcon={<LoginIcon/>}>Login</Button>
   </>
  )
}

export default NavButton;
