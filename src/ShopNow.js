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
    buttonName: "shop turmeric"
  },
  {
    image: list2,
    name: "Mighty Magnesium",
    description: "Essential mineral for healthy bones, heart & so much more",
    buttonName: "shop now"
  },
  {
    image: list3,
    name: "Prebiotics & Probiotics",
    description: "A dynamic duo for gut health",
    buttonName: "shop now"
  },

]
class Shopnow extends React.Component {
  render() {
    return (
      <div>
        <ul className='list-shop'>
          {medicine.map((med, index) => (
            <li className='list-item-shop' key={index}>
              <div className='list-item-image'>
                <img src={med.image} alt={med.text} />
              </div>
              <div className="list-item-text">
                <div className='list-item-text-child'>
                  <p>{med.name}</p>
                  <div>{med.description}</div>
                </div>
                <div className='list-item-text-child'>
                  <ShopNowButton value={med.buttonName} />
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