import React, { Component } from 'react';

class SearchForm extends Component {
    onSubmitForm = (e) => {
        e.preventDefault()
        this.props.updateSearch(e.target.searchTerm.value)
        this.props.searchHandler(e.target.searchTerm.value)
    }
    render() {
        const printOptions = this.props.printTypes.map(
            (printType, i) => <option value={printType} key={i}>{printType}</option>
    );
        const bookOptions = this.props.bookTypes.map(
            (bookType, i) => <option value={bookType} key={i}>{bookType}</option>
    );

    return (
        <form className="searchForm" onSubmit={this.onSubmitForm}>
            <label htmlFor="search">Search:</label>
            <input type="text" name="searchTerm" id="searchTerm" placeholder="Unicorns" />
            <label htmlFor="printType">Print Type:</label>
            <select id="printType" name="printType" onChange={e => this.props.handlePrintFilterChange(e.target.value)}>
                <option value="All">All</option>
                {printOptions}
            </select>
            <label htmlFor="bookType">Book Type:</label>
            <select id="bookType" name="bookType" onChange={e => this.props.handleBookFilterChange(e.target.value)}>
                <option value="All">All</option>
                {bookOptions}
            </select>
            <button type="submit">Search</button>
        </form>
    );
  }
}

export default SearchForm;