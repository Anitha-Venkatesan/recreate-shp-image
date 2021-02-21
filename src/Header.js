import React from "react";
import "./Header.css";
import Offers from "./Offers";


const offers = [
  {
  offerAmt: 20,
  offerText: "OFF",
  offerLimit: "ORDERS $100+"
  },
  {
  offerAmt: 10,
  offerText: "OFF",
  offerLimit: "ORDERS $100+"
  },
  {
  offerAmt: 5,
  offerText: "OFF",
  offerLimit: "ORDERS $100+"
  }
]

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Build a Basket & Save</h1>
        {offers.map((offer) => (
          < Offers offerAmt={offer.offerAmt} offerText={offer.offerText} offerLimit={offer.offerLimit}/>

        ))}
        
      </div>
    )
  }
}
export default Header;