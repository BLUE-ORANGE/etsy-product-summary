import React from 'react';

const ProductOverview = props => (
  <ul className="productOverview">
    <li> {props.create} </li>
    <li> Material: {props.mat} </li>
    <li> {props.create} </li>
    <li> FeedBack: </li>
    <li> Favorited by: </li>
  </ul>
);

export default ProductOverview;
