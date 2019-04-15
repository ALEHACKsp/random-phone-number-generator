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
    }
  }

  getGeneratedNumbers = (generatedNumber) => {

    this.setState({
      generatedNumber,
    })
  }

  render() {
    return (
      <div className="section">
      <Form getGeneratedNumbers={this.getGeneratedNumbers}/>
      { this.state.generatedNumber.length > 0 &&
        <Table
          generatedNumbers={this.state.generatedNumber}
        />
      }
    </div>
    )
  }
}

export default GenerateNumber;
