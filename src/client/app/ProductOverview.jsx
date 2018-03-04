import React from 'react';

const ProductOverview = props => (
  <div>
    <hx className="productOverview"> Overview </hx>
    <ul className="fonts">
      <li> {props.create} </li>
      <li> Material: {props.mat} </li>
      <li> {props.create} </li>
      <li> Feedback: </li>
      <li> Favorited by: </li>
    </ul>
  </div>
);

export default ProductOverview;
