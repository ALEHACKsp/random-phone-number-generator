// react library
import React from 'react';

// component
import InputBox from '../InputBox';
import Button from '../Button';
import Table from '../Table';

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
    <Table />

  </div>
)

export default GenerateNumber;
