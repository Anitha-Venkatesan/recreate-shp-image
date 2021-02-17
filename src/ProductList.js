import React from "react";
import list1 from "./images/SW1371.jpg";
import list2 from "./images/SW1113.jpg";
import list3 from "./images/DELIVERYINS01.jpg";
import list4 from "./images/SWA051.jpg";
import list5 from "./images/SW1613.jpg";


const products = [
  {
    images: list1,
    text: "Vitamin3 - Highest Potency",
    quantity: "5,000 IU 250 Sgels",
    price: "$10.99"
  },
  {
    images: list2,
    text: "Zinc Picolinate - Body Preferred Form",
    quantity: "22 mg 60 Caps",
    price: "2.59"
  },
  {
    images: list3,
    text: "Dr.Stephen Langer's Ultimate 16 Strain Probiotic with FOS",
    quantity: "3.2 Billion CFU 60 Veg Drcaps",
    price: "2 for $14.79"
  },
  {
    images: list4,
    text: "Delivery Insurance",
    
  },
  {
    images: list5,
    text: "Turmeric and Back Pepper",
    quantity: "60 Veg Caps",
    price: "2 for $13.99"
  }
]
class ProductList extends React.Component {
  render() {
    return (
      <div className = "container">
        {products.map((product, index) => (
          <div key={index} >
            <img src={product.images} alt="productimages"  />
            <div>{product.text}</div>
            <div>{product.quantity}</div>
            <div>{product.price}</div>
            <button className="buttonColor">Add to cart</button>
          </div>
        )
        )}
      </div>
    );
  }
}
export default ProductList;