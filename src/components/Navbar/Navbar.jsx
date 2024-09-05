import React from "react";
import AppBar from "@mui/material/AppBar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import MenuIcon from '@mui/icons-material/Menu';
import Slide from "@mui/material/Slide";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import NavButton from "./NavButton";
import "../../Css/Navbar/navbar.css";

const navbarStyle = {
  padding: "0px 35px",
  backgroundColor: "#FFFFFF",
};

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ?? <div />}
    </Slide>
  );
}

function Navbar(props) {
  return (
    <HideOnScroll {...props}>
      <AppBar sx={navbarStyle}>
        <div className="navbar navbar-expand-lg">
          <Logo />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <MenuIcon/>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <NavLinks />
          <NavButton />
          </div>
        </div>
      </AppBar>
    </HideOnScroll>
  );
}

export default Navbar;
