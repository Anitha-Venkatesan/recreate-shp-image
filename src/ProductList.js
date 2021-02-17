import React from "react";
import list1 from "./images/SW1371.jpg";
import list2 from "./images/SW1113.jpg";
import list3 from "./images/DELIVERYINS01.jpg";
import list4 from "./images/SWA051.jpg";
import list5 from "./images/SW1613.jpg";


const products = [
  {
    images: list1,
    text: "Vitamin3",
  },
  {
    images: list2,
    text: "Vitamin3",
  },
  {
    images: list3,
    text: "Vitamin3",
  },
  {
    images: list4,
    text: "Vitamin3",
  },
  {
    images: list5,
    text: "Vitamin3",
  }
]
class ProductList extends React.Component {
  render() {
    return (
      <div>
        {products.map((product, index) => (
          <grid key={index}>
            <img src={product.images} alt="productimages" style={{ width: 250 }} />
          </grid>
        )
        )}
      </div>
    );
  }
}
export default ProductList;