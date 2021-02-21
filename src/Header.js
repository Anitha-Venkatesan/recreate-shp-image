import React from "react";
import "./Header.css";
import Offers from "./Offers";
import  ActivateButtom from "./ActivateButton";


const offers = [
  {
  offerAmt: 20,
  offerText: "OFF",
  offerLimit: "ORDERS $100+"
  },
  {
  offerAmt: 10,
  offerText: "OFF",
  offerLimit: "ORDERS $60+"
  },
  {
  offerAmt: 5,
  offerText: "OFF",
  offerLimit: "ORDERS $45+"
  }
]

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Build a Basket & Save</h1>
        <ul className="offer-content">
        {offers.map((offer) => (
          < Offers offerAmt={offer.offerAmt} offerText={offer.offerText} offerLimit={offer.offerLimit}/>
        ))}
        </ul>
        <ActivateButtom />
      </div>
    )
  }
}
export default Header;