// react library
import React from 'react';

// third-party library
import { mount } from 'enzyme';

// component
import InputBox from './';

describe('Input Component', () => {
  it('should render input box', () => {
    const props = {
      type: 'password',
      handleChange: jest.fn(),
      handleBlur:  jest.fn(),
      name: 'password'
    }
    const wrapper = mount(<InputBox { ...props } />);
    const Input = wrapper.find('input');

    expect(Input.props().type).toBe('password');
    expect(Input.props().name).toBe('password');
  })

  it('should match an input with error',  () => {
    const props = {
      name: 'number',
      values: { number: '' },
      errors: { number: 'name is required' },
      touched: { number: true},
      handleChange: jest.fn(),
      handleBlur:  jest.fn(),
    }
    const wrapper = mount(<InputBox { ...props } />);

    expect(wrapper.props().errors[props.name]).toBe('name is required');
    expect(wrapper.props().touched[props.name]).toBe(true);
  });
})
