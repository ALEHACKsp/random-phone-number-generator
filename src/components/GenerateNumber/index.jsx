// react library
import React from 'react';

// component
import InputBox from '../InputBox';
import Button from '../Button';

// style
import './GenerateNumber.scss';

const GenerateNumber = () => (
  <div className="section">
    <InputBox
      placeholder="Input Number"
    />
    <Button
      classes="btn btn__primary"
      type="submit"
      name="Generate"
      // name={isSubmitting ? 'loading..' : 'Generate'}
      // disabled={isSubmitting}
    />
  </div>
)

export default GenerateNumber;
