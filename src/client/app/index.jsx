import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';
import ProductName from './ProductName.jsx';
import ProductPrice from './ProductPrice.jsx';
import ProductQA from './ProductQA.jsx';
import ProductOverview from './ProductOverview.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'HANDMADE ROCKS',
      price: 100,
    };
  }

  fetch() {
    $.ajax({
      
    })
  }

  render() {
    return (
      <div>
        <ProductName name={this.state.name} />
        <ProductPrice price={this.state.price} />
        Quantity: <ProductQA />
        OVERVIEW <ProductOverview />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
