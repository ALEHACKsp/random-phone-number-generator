// react libraries
import React from 'react';

// components
import Button from '../Button';
import InputBox from '../InputBox';

// style
import './Table.scss';

const Table = () => (
  <div className="table">
    <section className="table__buttons">
      <InputBox
        placeholder="Sort By"
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
        <span className="table__number">0801235634</span>
      </div>
      <div className="table__min-number">
        <label htmlFor="max-number"  className="table__label">Min Num:</label>
        <span className="table__number">0801235634</span>
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
        <tr>
          <td>1</td>
          <td>0801235634</td>
        </tr>
        <tr>
          <td>1</td>
          <td>0801235634</td>
        </tr>
        <tr>
          <td>1</td>
          <td>0801235634</td>
        </tr>
        <tr>
          <td>1</td>
          <td>0801235634</td>
        </tr>
        <tr>
          <td>1</td>
          <td>0801235634</td>
        </tr>
        <tr>
          <td>1</td>
          <td>0801235634</td>
        </tr>
        <tr>
          <td>1</td>
          <td>0801235634</td>
        </tr>
        <tr>
          <td>1</td>
          <td>0801235634</td>
        </tr>
        <tr>
          <td>1</td>
          <td>0801235634</td>
        </tr>
        <tr>
          <td>1</td>
          <td>0801235634</td>
        </tr>
      </tbody>
    </table>
  </div>
)

export default Table;