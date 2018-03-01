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
    this.random.bind(this);
    this.fetch();
  }

  random() {
    return Math.floor(Math.random() * 200);
  }

  fetch() {
    const randomNum = this.random();
    $.ajax({
      url: `/v1/product/${randomNum}/summary`,
      type: 'GET',
      success: (data) => {
        console.log('getting data!');
        console.log(data);
        this.setState({
          name: data[0].name,
          price: data[0].price,
        });
      },
      error: () => {
        console.log('failed to fetch');
      },
    });
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
