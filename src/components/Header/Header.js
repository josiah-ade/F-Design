import React from "react";
import image from "../images/image.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Container } from "@mui/material";

function Header() {
  return (
    <div className="header">
      <Container className="header__container">
        <div className="header__logo">
          <img src={image} alt="img" />
        </div>
        <div className="header__button">
          <div className="header__button__name">
            <div className="header__button__name__div">
              <span>EO</span>
            </div>
          </div>
          <div className="header__button__icon">
            <ExpandMoreIcon />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header;
