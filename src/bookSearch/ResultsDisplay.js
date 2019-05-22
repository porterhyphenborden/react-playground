import React, { Component } from 'react';
import Result from './Result.js';

class ResultsDisplay extends Component {

    render() {
        const bookList = this.props.books;
        console.log(bookList)
        const newBookList = bookList.map(function(book, i) {
            return (
                <Result 
                    key={i}
                    title={bookList[i].volumeInfo.title}
                    author={bookList[i].volumeInfo.authors ? bookList[i].volumeInfo.authors[0] : ''}
                    description={bookList[i].volumeInfo.description}
                    URL={bookList[i].volumeInfo.infoLink}
                    imageLink={bookList[i].volumeInfo.imageLinks.smallThumbnail}
                />
            )
    })

    return (
        <ul className="resultsDisplay">
            {newBookList}
        </ul>
    );
  }
}

ResultsDisplay.defaultProps = {
    books: []
};

export default ResultsDisplay;