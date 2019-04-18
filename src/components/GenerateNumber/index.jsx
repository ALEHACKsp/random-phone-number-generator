// react library
import React, { Component } from 'react';

// third-party library
import FileSaver from 'js-file-download';

// components
import Table from '../Table';
import Form from '../Form';
import Pagination from '../Pagination';

// utils
import { maxGeneratedNumber, minGeneratedNumber, sortByAscending, sortByDescending } from '../../utils/actions';

// style
import './GenerateNumber.scss';
import { generateNumber } from '../../utils/actions';

class GenerateNumber extends Component{
  constructor(props){
    super(props);
    this.state = {
      generatedNumber: [],
      generateNumberPerPage: [],
      maxNumber: '',
      minNumber:'',
      currentPage: 1,
      totalPerPage: 10,
      totalPages: 2
    }
  }


  /**
   * @description Gets generated numbers and sets the state
   *
   * @param {Array} generateNumber
   *
   * @returns {void}
   */
  getGeneratedNumbers = (generatedNumber) => {
    const { currentPage, totalPerPage } = this.state;
    const offset = (currentPage - 1) * totalPerPage;
    const totalPages = Math.ceil(generatedNumber.length / totalPerPage);
    const generateNumberPerPage = generatedNumber.slice(offset).slice(0, totalPerPage);
    const maxNumber = maxGeneratedNumber(generatedNumber);
    const minNumber = minGeneratedNumber(generatedNumber);

    this.setState({
      generatedNumber,
      generateNumberPerPage,
      maxNumber,
      minNumber,
      totalPages,
    })
  }

  /**
   * @description Sorts numbers in ascending or descending order
   *
   * @param {event} event
   *
   * @returns {void}
   */
  sortNumbers = (event) => {
    let { generateNumberPerPage, currentPage,  totalPerPage} = this.state;
    const offset = (currentPage - 1) * totalPerPage;
    const value = event.target.value;

    const sortNumbers = value === 'descending' ? sortByDescending(generateNumberPerPage) : sortByAscending(generateNumberPerPage);
    generateNumberPerPage = sortNumbers.slice(offset).slice(0, this.state.totalPerPage);

    this.setState({
      generateNumberPerPage
    });
  }

  /**
   * @description Downloads numbers
   *
   * @returns {void}
   */
  downLoadNumbers = () => {
    const { generatedNumber } = this.state;

    FileSaver(generatedNumber, 'numbers.xls');
  }


  render() {
    const { generateNumberPerPage, maxNumber, minNumber } = this.state;
    console.log(this.state.totalPages)
    return (
      <div className="section">
      <Form getGeneratedNumbers={this.getGeneratedNumbers}/>
      { generateNumberPerPage.length > 0 &&
        <React.Fragment>
          <Table
            generatedNumbers={ generateNumberPerPage }
            maxNumber={ maxNumber }
            minNumber={ minNumber }
            onChange={this.sortNumbers}
            downLoadNumbers={this.downLoadNumbers}
          />

          <Pagination
            pageCount={ this.state.totalPages }
            currentPage={ this.state.currentPage }
            limit={ this.state.totalPerPage }
            onPageChange={ this.onPageChange }
          />
        </React.Fragment>
      }
      
    </div>
    )
  }
}

export default GenerateNumber;
