import React from 'react';

const ProductOverview = props => (
  <ul>
    <li> {props.create} </li>
    <li> Material: {props.mat} </li>
    <li> {props.create} </li>
    <li> FeedBack: </li>
    <li> Favorited by: </li>
  </ul>
);

export default ProductOverview;
