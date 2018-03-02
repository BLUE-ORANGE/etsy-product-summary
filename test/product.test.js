import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProductName from '../src/client/app/ProductName.jsx';

Enzyme.configure({ adapter: new Adapter() });

test('App should render product name', () => {
  const productName = shallow(<ProductName />);

  expect(productName.exists()).toEqual(true);
});

