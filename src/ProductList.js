import React from "react";
import "./ProductList.css";
import Reviews from "./Reviews";
import Button from "./Button";
import list1 from "./images/SW1371.jpg";
import list2 from "./images/SW1113.jpg";
import list3 from "./images/SWA051.jpg";
import list4 from "./images/DELIVERYINS01.jpg";
import list5 from "./images/SW1613.jpg";


const products = [
  {
    image: list1,
    text: "Vitamin3 - Highest Potency",
    quantity: "5,000 IU 250 Sgels",
    premium: "Swanson Premium",
    price: "$10.99",
    bogo: false,
    maxstar: 5,
    star: 5,
    reviewCount: 440
  },
  {
    image: list2,
    text: "Zinc Picolinate - Body Preferred Form",
    quantity: "22 mg 60 Caps",
    premium: "Swanson Premium",
    price: "$2.59",
    bogo: false,
    maxstar: 5,
    star: 5,
    reviewCount: 95
  },
  {
    image: list3,
    text: "Dr.Stephen Langer's Ultimate 16 Strain Probiotic with FOS",
    quantity: "3.2 Billion CFU 60 Veg Drcaps",
    premium: "Swanson Probiotics",
    price: "2 for $14.79",
    bogo: true,
    maxstar: 5,
    star: 5,
    reviewCount: 823

  },
  {
    image: list4,
    text: "DELIVERY INSURANCE",
    premium: "Swanson Health Prodcuts, Inc.",
    price: "$1.00",
    bogo: false,
    maxstar: 5,
    star: 5,
    reviewCount: 78

  },

  {
    image: list5,
    text: "Turmeric and Back Pepper",
    quantity: "60 Veg Caps",
    premium: "Swanson Premium",
    price: "2 for $13.99",
    bogo: true,
    maxstar: 5,
    star: 5,
    reviewCount: 238
  }
]
class ProductList extends React.Component {
  render() {
    return <div className='container'>
      <ul className='list'>
        {products.map((product, index) => (
          <li className='list-item' key={index}>
            {product.bogo &&
              <div className="bogoIcon">
                <span>BOGO</span>
              </div>}
            <div className='list-item-child'>
              <img src={product.image} alt={product.text} />
            </div>
            <div className='list-item-child'> 
            <Reviews maxstar= {product.maxstar} star= {product.maxstar} value={product.reviewCount} />
            </div>
            <div className='list-item-child premium'>{product.premium}</div>
            <div className='list-item-child text'>{product.text}</div>
            <div className='list-item-child quantity'>{product.quantity}</div>
            <div className={`list-item-child price ${product.bogo ? "bogo" : ""}`}>{product.price}</div>
            <div className='list-item-child'>
              <Button />
            </div>
          </li>
        ))}
      </ul>
    </div>
  }
}
export default ProductList;