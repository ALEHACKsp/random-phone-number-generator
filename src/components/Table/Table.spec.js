// react library
import React from 'react';

// third-party library
import { mount } from 'enzyme';

// component
import Table from './';

// actions
import { generateNumber,  maxGeneratedNumber, minGeneratedNumber } from '../../utils/actions';

describe('Table Component', () => {
  const generatedNumbers = generateNumber(10);
  const props = {
    downLoadNumbers: jest.fn(),
    onChange: jest.fn(),
    generatedNumbers,
    maxNumber: maxGeneratedNumber(generatedNumbers),
    minNumber: minGeneratedNumber(generatedNumbers),
    totalNumberGenerated: generatedNumbers,
  }

  it('should render table', () => {
    const wrapper = mount(<Table { ...props } />);

    expect(wrapper.props().maxNumber).toBe(props.maxNumber);
    expect(wrapper.props().minNumber).toBe(props.minNumber);
    expect(wrapper.props().totalNumberGenerated.length).toBe(10);
  })
})
