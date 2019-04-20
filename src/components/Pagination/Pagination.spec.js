// react library
import React from 'react';

// third-party library
import { mount } from 'enzyme';

// component
import Pagination from './';

describe('Pagination Component', () => {
  it('should render pagination', () => {
    const props = {
      pageCount: 2,
      currentPage: 1,
      limit: 10,
      onPageChange: jest.fn()
    }
    const wrapper = mount(<Pagination { ...props } />)

    expect(wrapper.props().pageCount).toBe(2);
    expect(wrapper.props().currentPage).toBe(1)
  })
})
