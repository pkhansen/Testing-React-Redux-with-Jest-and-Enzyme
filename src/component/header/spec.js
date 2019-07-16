import React from 'react';
import { shallow } from 'enzyme';
import Header from './index.js';
import { findByTestAtrr } from './../../../Utils';

const setup = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
}


describe('Header Component', () => {

  let component;
  beforeEach(() => {
    component = setup();
  })

  it('Should render without errors', () => {
    const wrapper = findByTestAtrr(component, 'headerComponent')
    expect(wrapper.length).toBe(1);
  });

  it('Should render a logo', () => {
    const logo = findByTestAtrr(component, 'logoImg')
    expect(logo.length).toBe(1);
  })
});