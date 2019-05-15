import React from 'react';


class RouletteGun extends React.Component {
    static defaultProps = {
        bulletInChamber: 8
    };

    state = {
        chamber: null,
        spinningTheChamber: false,
    };

    componentWillUnmount() {
        clearTimeout(this.timeout)
    }

    handleButtonClick = () => {
        this.setState({
            spinningTheChamber: true,
        })
        this.timeout = setTimeout(() => {
            const chamberNum = Math.ceil(Math.random() * 8);
            this.setState({
                chamber: chamberNum,
                spinningTheChamber: false,
            })
        }, 2000)
    }

    displayContent = () => {
        if (this.state.spinningTheChamber === true) {
            return 'spinning the chamber and pulling the trigger...'
        }
        else if (this.state.chamber === this.props.bulletInChamber) {
            return 'BANG!!!!'
        }
        else {
            return 'you are safe!'
        }
    }

    render() {
        console.log('component rendered')
        return (
            <div>
                <p>{this.displayContent()}</p>
                <button onClick={this.handleButtonClick}>
                    Pull the trigger!
                </button>
            </div>
        )
    }
}

export default RouletteGun