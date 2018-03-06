import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ProductName from './ProductName.jsx';
import ProductPrice from './ProductPrice.jsx';
import ProductQA from './ProductQA.jsx';
import ProductOverview from './ProductOverview.jsx';
import ProductShipping from './ProductShipping.jsx';
import ShippingInfo from './ShippingInfo.jsx';
import style from '../style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'HANDMADE ROCKS',
      price: 100,
      itemCreation: 'Handmade',
      itemMat: 'wood',
      shipping: false,
    };
    this.random.bind(this);
    this.fetch();
  }

  shipClick() {
    if (this.state.shipping) {
      this.setState({
        shipping: false,
      });
    } else {
      this.setState({
        shipping: true,
      });
    }
    console.log(this.state.shipping);
  }

  random() {
    return Math.floor(Math.random() * 200);
  }

  fetch() {
    const randomNum = this.random();
    $.ajax({
      url: `http://127.0.0.1:3002/v1/product/${randomNum}/summary`,
      type: 'GET',
      success: (data) => {
        console.log('getting data!');
        console.log(data);
        this.setState({
          name: data[0].name,
          price: data[0].price,
          itemCreation: data[0].itemCreation,
          itemMat: data[0].materials,
        });
      },
      error: () => {
        console.log('failed to fetch');
      },
    });
  }

  render() {
    return (
      <div className="fonts">
        <ProductName name={this.state.name} />
        <ProductPrice price={this.state.price} />
        <button className="emailStyling"> Ask a question </button>
        <br />
        Quantity <ProductQA />
        <hr className="hr" />
        <ProductOverview create={this.state.itemCreation} mat={this.state.itemMat} />
        <hr className="hr" />
        <ProductShipping shipstate={this.state.shipping} shipClick={this.shipClick.bind(this)} />
        <ShippingInfo states={this.state.shipping} />
      </div>
    );
  }
}

export default ReactDOM.render(<App />, document.getElementById('product-summary'));
