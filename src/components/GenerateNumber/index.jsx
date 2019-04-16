// react library
import React, { Component } from 'react';

// third-party library
import FileSaver from 'js-file-download';

// components
import Table from '../Table';
import Form from '../Form';

// utils
import { maxGeneratedNumber, minGeneratedNumber, sortByAscending, sortByDescending } from '../../utils/actions';

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

  /**
   * Gets generated numbers and sets the state
   *
   * @param {Array} generateNumber
   *
   * @returns {void}
   */
  getGeneratedNumbers = (generatedNumber) => {
    const maxNumber = maxGeneratedNumber(generatedNumber);
    const minNumber = minGeneratedNumber(generatedNumber);

    this.setState({
      generatedNumber,
      maxNumber,
      minNumber
    })
  }

  /**
   * Sorts numbers in ascending or descending order
   *
   * @param {event} event
   *
   * @returns {void}
   */
  sortNumbers = (event) => {
    const { generatedNumber } = this.state;
    const value = event.target.value;

    const sortNumbers = value === 'descending' ? sortByDescending(generatedNumber) : sortByAscending(generatedNumber);
    this.setState({
      generateNumber: sortNumbers
    });
  }

  /**
   * Downloads numbers
   *
   * @returns {void}
   */
  downLoadNumbers = () => {
    const { generatedNumber } = this.state;

    FileSaver(generatedNumber, 'numbers.xls');
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
          onChange={this.sortNumbers}
          downLoadNumbers={this.downLoadNumbers}
        />
      }
    </div>
    )
  }
}

export default GenerateNumber;
