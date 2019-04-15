// react library
import React, { Component } from 'react';

// components
import Table from '../Table';
import Form from '../Form';

// utils
import { maxGeneratedNumber } from '../../utils/actions';

// style
import './GenerateNumber.scss';

class GenerateNumber extends Component{
  constructor(props){
    super(props);
    this.state = {
      generatedNumber: [],
      maxNumber: '',
      minNumber:''
    }
  }

  getGeneratedNumbers = (generatedNumber) => {
    const maxNumber = maxGeneratedNumber(generatedNumber);
    console.log({maxNumber});

    this.setState({
      generatedNumber,
      maxNumber
    })
  }

  render() {
    return (
      <div className="section">
      <Form getGeneratedNumbers={this.getGeneratedNumbers}/>
      { this.state.generatedNumber.length > 0 &&
        <Table
          generatedNumbers={this.state.generatedNumber}
          maxNumber={this.state.maxNumber}
        />
      }
    </div>
    )
  }
}

export default GenerateNumber;
