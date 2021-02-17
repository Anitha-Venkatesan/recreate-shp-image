import React from "react";
import "./ProductList.css";
import list1 from "./images/SW1371.jpg";
import list2 from "./images/SW1113.jpg";
import list3 from "./images/SWA051.jpg";
import list4 from "./images/DELIVERYINS01.jpg";
import list5 from "./images/SW1613.jpg";


const products = [
  {
    images: list1,
    text: "Vitamin3 - Highest Potency",
    quantity: "5,000 IU 250 Sgels",
    premium:"Swanson Premium",
    price: "$10.99"
  },
  {
    images: list2,
    text: "Zinc Picolinate - Body Preferred Form",
    quantity: "22 mg 60 Caps",
    premium:"Swanson Premium",
    price: "$2.59"
  },
  {
    images: list3,
    text: "Dr.Stephen Langer's Ultimate 16 Strain Probiotic with FOS",
    quantity: "3.2 Billion CFU 60 Veg Drcaps",
    premium:"Swanson Probiotics",
    price: "2 for $14.79"

  },
  {
    images: list4,
    text: "Delivery Insurance",
    premium:"Swanson Health Prodcuts, Inc.",

  },

  {
    images: list5,
    text: "Turmeric and Back Pepper",
    quantity: "60 Veg Caps",
    premium:"Swanson Premium",
    price: "2 for $13.99"
  }
]
class ProductList extends React.Component {
  render() {
    return (
      <div className= "boxContainer">
        {products.map((product, index) => (
          <div key={index} className="container">
            <img src={product.images} alt="productimages" />
            <div className="premium">{product.premium}</div>
            <div className="text">{product.text}</div>
            <div className="quantity">{product.quantity}</div>
            <div className="price">{product.price}</div>
            <button className="buttonColor">Add to cart</button>
          </div>
        )
        )}
      </div>

    );
  }
}
export default ProductList;