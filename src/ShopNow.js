import React from "react";
import "./ShopNow.css";
import ShopNowButton from "./ShopNowButton.js";
import list1 from "./images/SW1371.jpg";
import list2 from "./images/SW1113.jpg";
import list3 from "./images/SWA051.jpg";

const medicine = [
  {
    image: list1,
    name: "Healthy Joints, Digestion & More",

  },
  {
    image: list2,
    name: "Mighty Magnesium",
    description: "Essential mineral for healthy bones, heart & so much more",

  },
  {
    image: list3,
    name: "Prebiotics & Probiotics",
    description: "A dynamic duo for gut health",

  },

]
class Shopnow extends React.Component {
  render() {
    return (
      <div className="shopContainer">
        <ul className='list'>
          {medicine.map((med, index) => (
            <li className='list-item' key={index}>
              <div className="row">
                <div className='list-item-child column'>
                  <img src={med.image} alt={med.text} />
                </div>
                <div className='list-item-child column'>
                  <div className='list-item-child name column'>{med.name}</div>
                  <div className="row">
                    <div className='list-item-child description column'>{med.description}</div>
                  </div>
                  <div className="row">
                    <ShopNowButton />
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
export default Shopnow;