import React, { Component } from 'react';

class SearchBox extends Component {
    onSubmitForm = (e) => {
        e.preventDefault()
        this.props.updateSearch(e.target.searchTerm.value)
        this.props.searchHandler(e.target.searchTerm.value)
    }
    render() {
        return (
            <form className="searchForm" onSubmit={this.onSubmitForm}>
                <label htmlFor="search">Search:</label>
                <input type="text" name="searchTerm" id="searchTerm" placeholder="Unicorns" />
                <button type="submit">Search</button>
            </form>
        );
    }
}

export default SearchBox;