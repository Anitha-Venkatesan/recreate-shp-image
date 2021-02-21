import React from "react";
import "./Offers.css";


export default class Offers extends React.Component {
  render(){
    return(
      <div className="offers-box">
          <li className="offers">
            <div className="dollar-offer">
              <span>{`$`+this.props.offerAmt}</span>
            </div>
            <div className="max-amount-offer">
              <span className="offer-size">{this.props.offerText}</span>
              <div className="order-size">{this.props.offerLimit}</div>
            </div>
          </li>
        </div>
    )
  }

}

