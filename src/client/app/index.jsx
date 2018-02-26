import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';
import ProductName from './ProductName.jsx';
import ProductPrice from './ProductPrice.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'HANDMADE ROCKS',
      price: 100,
    };
  }

  render() {
    return (
      <div>
        <ProductName name={this.state.name} />
        <ProductPrice price={this.state.price} />
        
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
