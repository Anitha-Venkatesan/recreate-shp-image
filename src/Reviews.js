import React from "react";

class Reviews extends React.Component {


  render() {
    let maxStarArr = [];
    for (let i = 0; i < this.props.maxstar; i++) {
      maxStarArr.push(i);
    }
    console.log(maxStarArr);
    return (
      <div className='list-item-child class="fa fa-star"'>
        {maxStarArr.map((maxstar) => (
          <span class="fa fa-star-o"></span>
        ))}
        <span class="count-style">{this.props.value}</span>
      </div>
    );
  }
}

export default Reviews;
