import React from "react";
import "./Reviews.css";

class Reviews extends React.Component {
  render() {
    let maxStarArr = [];
    const star = this.props.star;
    for (let i = 0; i < this.props.maxstar; i++) {
      if( i < star) {
        maxStarArr.push("fa fa-star checked"); 
      } else {
        maxStarArr.push("fa fa-star unchecked"); 
      }
    }
    return (
      <>
        {maxStarArr.map((maxstar, index) => (
          <span key={index} className={maxstar}></span>))}
        <span className="count-style">{this.props.value}</span>
      </>
    );
  }
}

export default Reviews;
