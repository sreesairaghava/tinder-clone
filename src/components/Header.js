import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import Logo from "../assets/tinder-logo.png";
import IconButton from "@material-ui/core/IconButton";
import "./Header.css";
function Header(props) {
  return (
    //   Using BEM for Styling Convention
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>
      <img className="header__logo" src={Logo} alt="tinder-logo" />
      <IconButton>
        <ForumIcon fontSize="large" className="header__icon" />
      </IconButton>
    </div>
  );
}

export default Header;
