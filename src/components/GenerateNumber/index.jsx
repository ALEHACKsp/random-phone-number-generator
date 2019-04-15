// react library
import React, { Component } from 'react';

// third-party library
import { withFormik } from 'formik';

// component
import InputBox from '../InputBox';
import Button from '../Button';
import Table from '../Table';

// style
import './GenerateNumber.scss';

export const GenerateNumberConfig = {
  mapPropsToValues: () => ({
    number: '',
  }),

 /**
   * handles company form submit event
   *
   * @param {object} values
   * @returns {void}
   */
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  }
}

class GenerateNumber extends Component{
  render() {
   const {
      values,
      touched,
      errors,
      isSubmitting,
      handleChange,
      handleSubmit
    } = this.props;

    return (
      <div className="section">
      <form onSubmit={handleSubmit}>
        <InputBox
          placeholder="Input Number"
          type="number"
          name="number"
          { ...this.props }
        />
        <Button
          classes="btn btn__primary"
          type="submit"
          name="Generate"
          name={isSubmitting ? 'Generating...' : 'Generate'}
          disabled={isSubmitting}
        />
      </form>
      <Table />
    </div>
    )
  }
}

export default withFormik(GenerateNumberConfig)(GenerateNumber);
