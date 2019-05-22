import React, { Component } from 'react';

class Filters extends Component {
  render() {
    const printOptions = this.props.printTypes.map(
        (printType, i) => <option value={printType} key={i}>{printType}</option>
    );
    const bookOptions = this.props.bookTypes.map(
        (bookType, i) => <option value={bookType} key={i}>{bookType}</option>
    );

    return (
        <form className="filterBox">
            <label htmlFor="printType">Print Type:</label>
            <select id="printType" name="printType">
                <option value="None">All</option>
                {printOptions}
            </select>
            <label htmlFor="bookType">Book Type:</label>
            <select id="bookType" name="bookType">
                <option value="None">All</option>
                {bookOptions}
            </select>
        </form>
    );
  }
}

export default Filters;