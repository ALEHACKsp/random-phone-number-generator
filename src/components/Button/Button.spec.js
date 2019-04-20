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
  });

  it('should render button with only icon', () => {
    const wrapper =  mount(<Button hasIcon="true" iconClass="fa fa-search" classes="btn"/>);
    const button = wrapper.find('button');
    const span = wrapper.find('span');
    const i = wrapper.find('i');

    expect(button.props().className).toBe('btn');
    expect(span.length).toBe(1);
    expect(i.props().className).toBe('fa fa-search');
    expect(wrapper.props().hasIcon).toBe('true');
  });
});
