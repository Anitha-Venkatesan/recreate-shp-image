import React from "react";
import hero from "./images/Hero.jpg";


class Header extends React.Component {

  render() {
    return(
      <div>
       <img src={hero}  alt="logoImage" className="logo-image" />
      </div>
    )
  }

}

export default Header;