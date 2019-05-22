import React, { Component } from 'react';

class Result extends Component {
  render() {
    return (
        <li className="result">
            <img src={this.props.imageLink} alt={this.props.title}/>
            {this.props.title}<br />
            Author: {this.props.author}<br />
            Url: {this.props.URL}<br />
            {this.props.description}
        </li>
    );
  }
}

export default Result;