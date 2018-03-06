import React from 'react';

const ProductShipping = ({ shipClick }) => (
  <div>
    <hx className="productShippingHeader"> Shipping </hx>
    <div className="productShippingDes">
      Made just for you. Ready to ship in 1-2 weeks.
    </div>
    <div className="productShippingState">
      From United States
    </div>
    <button className="productShippingBtn" onClick={shipClick}> Get shipping cost </button>
  </div>
);

export default ProductShipping;
