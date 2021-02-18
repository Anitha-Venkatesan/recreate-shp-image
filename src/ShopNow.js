import React from "react";
import "./ShopNow.css";
import list1 from "./images/SW1371.jpg";
import list2 from "./images/SW1113.jpg";
import list3 from "./images/SWA051.jpg";

const medicine = [
  {
    images: list1,
    name: "Healthy Joints, Digestion & More",

  },
  {
    images: list2,
    name: "Mighty Magnesium",
    description: "Essential mineral for healthy bones, heart & so much more",

  },
  {
    images: list3,
    name: "Prebiotics & Probiotics",
    description: "A dynamic duo for gut health",

  },

]
class Shopnow extends React.Component {
  render() {
    return (
      <div className="boxContainer">
        {medicine.map((med, index) => (
          <div key={index} className="shopContainer">
            <img src={med.images} alt="productimages" />"
            <div className="name">{med.name}</div>
            <div>{med.description}</div>
            <button className="shopnow">shop now</button>
          </div>
        )
        )}
      </div>

    );
  }
}
export default Shopnow;