// react library
import React, { Component } from 'react';

// third-party library
import { withFormik } from 'formik';

// components
import InputBox from '../InputBox';
import Button from '../Button';

// utils
import { GenerateNumberSchema } from '../../utils/validation';

// actions
import { generateNumber } from '../../utils/actions';

export const FormConfig = {
  mapPropsToValues: () => ({
    number: '',
  }),

  validationSchema: GenerateNumberSchema,

  /**
   * handles company form submit event
   *
   * @param {object} values
   * @returns {void}
   */
  handleSubmit: (values, { setSubmitting, resetForm, props }) => {
    const generatedNumbers = generateNumber(values.number);

    setTimeout(() => {
      props.getGeneratedNumbers(generatedNumbers);
      setSubmitting(false);
      resetForm();
    }, 500);
  }
}

const Form = (props) => {
  const { values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit } = props;

    return (
      <form onSubmit={handleSubmit}>
        <InputBox
          placeholder="Input Number"
          type="number"
          name="number"
          { ...props }
        />
        <Button
          classes="btn btn__primary"
          type="submit"
          name="Generate"
          name={ isSubmitting ? 'Generating...' : 'Generate' }
          disabled={ isSubmitting }
        />
      </form>
    )
}

export default withFormik(FormConfig)(Form);
