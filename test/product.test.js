import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProductName from '../src/client/app/ProductName.jsx';
import ProductPrice from '../src/client/app/ProductPrice.jsx';
import ProductOverview from '../src/client/app/ProductOverview.jsx';

Enzyme.configure({ adapter: new Adapter() });

test('App should render product name', () => {
  const productName = shallow(<ProductName />);

  expect(productName.exists()).toEqual(true);
});

test('App should render product price', () => {
  const productPrice = shallow(<ProductPrice />);

  expect(productPrice.exists()).toEqual(true);
});

test('App should render product overview', () => {
  const productOverview = shallow(<ProductOverview />);

  expect(productOverview.exists()).toEqual(true);
});
