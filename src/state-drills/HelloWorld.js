import React from 'react';

class HelloWorld extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            who: 'world'
        }
    }
    handleClickWorld = () => {
        this.setState({
            who: 'World'
        })
    }
    handleClickFriend = () => {
        this.setState({
            who: 'Friend'
        })
    }
    handleClickReact = () => {
        this.setState({
            who: 'React'
        })
    }
    render() {
        return (
            <div>
                <p>Hello, {this.state.who}!</p>
                <button onClick={this.handleClickWorld}>
                    World
                </button>
                <button onClick={this.handleClickFriend}>
                    Friend
                </button>
                <button onClick={this.handleClickReact}>
                    React
                </button>
            </div>
        )
    }
}

export default HelloWorld