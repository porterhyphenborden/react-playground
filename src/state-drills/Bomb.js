import React from 'react';

class Bomb extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    componentDidMount() {
        console.log('componentDidMount')
        this.interval = setInterval(() => {
            console.log('setInterval')
            this.setState({
                count: this.state.count + 1
            })
        
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    displayWord = () => {
        const currentCount = this.state.count;
        if (currentCount >= 8) {
            clearInterval(this.interval);
            return 'BOOM!!!'
        }
        else if (currentCount % 2 === 0) {
            return 'tick'
        }
        else {
            return 'tock'
        }
    }
    render() {
        console.log('component rendered')
        return (
            <div>
                <p>{this.displayWord()}</p>
            </div>
        )
    }
}

export default Bomb