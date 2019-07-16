import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index.js';

import { findByTestAtrr } from './../../../Utils'

const setup = (props = {}) => {
  const component = shallow(<Headline {...props} />)
  return component;
};

describe('Headline Component', () => {
  describe('Have props', () => {

    let wrapper;
    beforeEach(() => {
      const props = {
        header: 'Test Header',
        desc: 'Test Desc'
      };
      wrapper = setup(props);
    });

    it('Should render without errors', () => {
      const component = findByTestAtrr(wrapper, 'HeadlineComponent');
      expect(component.length).toBe(1);
    });

    it('Should render a h1', () => {
      const h1 = findByTestAtrr(wrapper, 'header');
      expect(h1.length).toBe(1);
    });

    it('Should render a description', () => {
      const desc = findByTestAtrr(wrapper, 'descWrapper');
      expect(desc.length).toBe(1);
    })


  });

  describe('Have NO props', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup();
    })

    it('Should not render', () => {
      const component = findByTestAtrr(wrapper, 'HeadlineComponent');
      expect(component.length).toBe(0);
    });
  });
});