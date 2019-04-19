// react library
import React from 'react';

// third-party library
import { mount } from 'enzyme';

// component
import Button from './index';

describe('Button Component', () => {
  it('should render the button', () => {
    const wrapper = mount(<Button name="generate" classes="btn"/>);
    const button = wrapper.find('button');

    expect(button.props().className).toBe('btn')
  })
})

