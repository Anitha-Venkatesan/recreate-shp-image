import React from "react";
import "./ShopNow.css";
import ShopNowButton from "./ShopNowButton.js";
import image1 from "./images/turmeric.png";
import image2 from "./images/magnesium.png";
import image3 from "./images/probiotic.png";

const medicine = [
  {
    image: image1,
    name: "Healthy Joints, Digestion & More",
    buttonName: "shop turmeric",
    turmeric: true
  },
  {
    image: image2,
    name: "Mighty Magnesium",
    description: "Essential mineral for healthy bones, heart & so much more",
    buttonName: "shop now"
  },
  {
    image: image3,
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
              <div className={med.turmeric ? 'list-item-image turmeric' : 'list-item-image' }>
                <img src={med.image} alt={med.text} />
              </div>
              <div className="list-item-text">
                <div className={med.turmeric ? 'list-item-text-child turmeric' : 'list-item-text-child' }>
                    <span className="name-style">{med.name}</span>
                     {med.description &&<div>{med.description}</div>}
                </div>
                <div>
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