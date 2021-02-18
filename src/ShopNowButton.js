import React from "react";
import "./ShopNowButton.css";

class Button extends React.Component {
  render() {
    return (
        <button className="shopNowButtonColor column">{this.props.value}</button>
    )
  }
}

export default Button;