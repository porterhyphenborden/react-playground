import React, { Component } from 'react';
import './App.css';
import SearchForm from './bookSearch/SearchForm.js';
import ResultsDisplay from './bookSearch/ResultsDisplay.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      printOption: 'All',
      bookOption: 'All',
      books: []
    };
  }

  updateSearch(searchTerm) {
    console.log('search term updated')
    this.setState({
      searchTerm
    });
  }

  updatePrintFilter(printOption) {
    console.log('search term updated')
    this.setState({
      printOption
    });
  }

  updateBookFilter(bookOption) {
    console.log('search term updated')
    this.setState({
      bookOption
    });
  }

  searchHandler(searchTerm) {
    console.log('search run')
    // const currentSearchTerm = this.state.searchTerm;
    // console.log(currentSearchTerm);
    const currentPrintFilter = (this.state.printOption === 'All') ? 'all' : this.state.printOption;
    const currentBookFilter = this.state.bookOption;
    
    const URL = (currentBookFilter === 'All') 
      ? ('https://www.googleapis.com/books/v1/volumes?q=' + searchTerm + '&printType=' + currentPrintFilter + '&key=AIzaSyBHJyD9bkL5L5bLPM6gz3eUHadelcqaqto')
      : ('https://www.googleapis.com/books/v1/volumes?q=' + searchTerm + '&printType=' + currentPrintFilter + '&filter=' + currentBookFilter + '&key=AIzaSyBHJyD9bkL5L5bLPM6gz3eUHadelcqaqto');
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        const books = data.items;
        this.setState({
          books
        });
      });
  }

  render() {
    return (
        <div className="App">
          <h1>Google Book Search</h1>
          <SearchForm 
            searchTerm={this.state.searchTerm} 
            printOption={this.state.printOption}
            bookOption={this.state.bookOption}
            printTypes={["books", "magazines"]}
            bookTypes={["free-ebooks", "paid-ebooks"]}
            updateSearch={searchTerm => this.updateSearch(searchTerm)}
            searchHandler={searchTerm => this.searchHandler(searchTerm)}
            handlePrintFilterChange={printOption => this.updatePrintFilter(printOption)}
            handleBookFilterChange={bookOption => this.updateBookFilter(bookOption)}
          />
          <ResultsDisplay 
            searchTerm={this.state.searchTerm} 
            printOption={this.state.printOption}
            bookOption={this.state.bookOption}
            books={this.state.books}
          />
        </div>
    );
  }
}

export default App;