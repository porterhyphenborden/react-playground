import React, { Component } from 'react';

class Result extends Component {
  render() {
    return (
        <li className="result">
            <img src={this.props.imageLink} alt={this.props.title}/>
            <div className="bookText">
                <span className="bookTitle">{this.props.title}</span><br />
                Author: {this.props.author}<br />
                <a href={this.props.URL} target="_blank">Get more info</a><br />
                {this.props.description}
            </div>
        </li>
    );
  }
}

export default Result;