// react libraries
import React from 'react';

// components
import Button from '../Button';
import SelectBox from '../SelectBox';

// style
import './Table.scss';

const sortBy = ['ascending', 'descending'];

const Table = ({generatedNumbers, maxNumber, minNumber}) => (
  <div className="table">
    <section className="table__buttons">
      <SelectBox
        name="sortBy"
        options={sortBy}
       />
      <Button
        hasIcon={true}
        iconClass="fas fa-download"
        classes="btn btn__secondary"
      />
    </section>
    <div className="table__vl"/>
    <section className="table__header">
      <div className="table__max-number">
        <label htmlFor="max-number" className="table__label">Max Num:</label>
        <span className="table__number">{maxNumber && `0${maxNumber}`}</span>
      </div>
      <div className="table__min-number">
        <label htmlFor="max-number"  className="table__label">Min Num:</label>
        <span className="table__number">{minNumber && `0${minNumber}`}</span>
      </div>
    </section>
    <div className="table__vl"/>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Generated Number</th>
        </tr>
      </thead>
      <tbody>
        { generatedNumbers.length > 0 && generatedNumbers.map((number, index) =>
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{number}</td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
)

export default Table;
