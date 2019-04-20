// react library
import React from 'react';

// third-party library
import { mount } from 'enzyme';

// component
import SelectBox from './';

describe('SelectBox component', () => {
  const options = ['ascending', 'descending'];
  const props = {
    name: 'sortBy',
    handleChange: jest.fn(),
    options
  }

  it('should render selectbox properly', () => {
    const wrapper = mount(<SelectBox { ...props } />);

    expect(wrapper.props().name).toBe(props.name);
    expect(wrapper.props().options.length).toBe(2);
  });

  it('should handle selectbox change', () => {
    const updateProps = {
      ...props,
      handleSelectBoxChange: jest.fn
    }
    const wrapper = mount(<SelectBox { ...updateProps } />);
    wrapper.setState({ showDropdownOptions: true })
    const selectOption = wrapper.find('.select-box__options__item').at(0).simulate('mousedown');

    expect(wrapper.state().selectedOption).toBe(props.options[0]);
    expect(selectOption.props().className).toBe('select-box__options__item');
  });

  it('should toggle dropdownoptions', () => {
    const wrapper = mount(<SelectBox { ...props } />);
    wrapper.find('.select-box__inputField').simulate('click');

    expect(wrapper.state().showDropdownOptions).toBe(true);
  });

  it('should hide dropdown options', () => {
    const wrapper = mount(<SelectBox { ...props } />);
    wrapper.setState({ showDropdownOptions: true });
    wrapper.find('input').simulate('blur');

    expect(wrapper.state().showDropdownOptions).toBe(false);
  });
});
