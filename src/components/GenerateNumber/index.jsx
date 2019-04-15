// react library
import React, { Component } from 'react';

// components
import Table from '../Table';
import Form from '../Form';

// utils
import { maxGeneratedNumber, minGeneratedNumber } from '../../utils/actions';

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
    const minNumber = minGeneratedNumber(generatedNumber);

    this.setState({
      generatedNumber,
      maxNumber,
      minNumber
    })
  }

  render() {
    const { generatedNumber, maxNumber, minNumber } = this.state;
    return (
      <div className="section">
      <Form getGeneratedNumbers={this.getGeneratedNumbers}/>
      { generatedNumber.length > 0 &&
        <Table
          generatedNumbers={ generatedNumber }
          maxNumber={ maxNumber }
          minNumber={ minNumber }
        />
      }
    </div>
    )
  }
}

export default GenerateNumber;
