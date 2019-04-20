// react library
import React from 'react';

// third-party library
import { mount } from 'enzyme';

// component
import Form, { FormConfig } from './';

describe('Form Component', () => {
  const props = {
    values: {},
    touched: {},
    isSubmitting: false,
    handleChange: jest.fn(),
    handleSubmit: jest.fn(),
  }

  it('should render form correctly', () => {
    const wrapper = mount(<Form { ...props } />);

    expect(wrapper.props().isSubmitting).toBe(false);
    expect(wrapper.props().values).toEqual({});
  })

  // it('should submit a form', () => {
  //   const updateProps = {
  //     ...props,
  //     values: { number: 10 },
  //     touched: { number: true},
  //     isSubmitting: true,
  //   }

  //   const wrapper = mount(<Form { ...updateProps } />);
  //   wrapper.find('button');
  //   console.log(wrapper.find('button').simulate('click'));
  // })
});

describe('FormConfig object', () => {
  it('shouild return an object with number', () => {
    expect(FormConfig.mapPropsToValues()).toEqual({
      number: ''
    })
  });

  it('should handle submit function', async (done) => {
    const setSubmitting = jest.fn();
    const resetForm = jest.fn();
    const props = {
      location: {},
      dispatch: () => Promise.resolve(),
      getGeneratedNumbers: jest.fn(),
    };

    const { handleSubmit } = FormConfig;
    await handleSubmit({}, { setSubmitting, resetForm, props });

    setTimeout(() => {
      expect(setSubmitting).toHaveBeenNthCalledWith(1, false);
      expect(resetForm).toHaveBeenCalled();
      expect(props.getGeneratedNumbers).toHaveBeenCalled();
      done();
    }, 500);
  });
})