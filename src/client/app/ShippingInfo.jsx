import React from 'react';

const ShippingInfo = ({ states }) => {
  if (!states) {
    return null;
  }

  return (
    <div>
      <div className="shippingCountry">
        Country
        <br />
        <select className="select">
          <option> United States </option>
        </select>
      </div>
      <div className="shippingZip">
        Zip or postal code
        <br />
        <input className="input" type="test" />
      </div>
    </div>
  );
};

export default ShippingInfo;
