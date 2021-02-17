import React from "react";

const medicine = [
  {
    name: "Healthy Joints, Digestion & More",

  },
  {
    name: "Mighty Magnesium",
    description: "Essential mineral for healthy bones, heart & so much more",

  },
  {
    name: "Prebiotics & Probiotics",
    description: "A dynamic duo for gut health",

  },

]
class Shopnow extends React.Component {
  render() {
    return (
      <div className="shopnowContainer">
        {medicine.map((med, index) => (
          <div key={index}>
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