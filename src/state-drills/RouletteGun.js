import React from 'react';

class RouletteGun extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chamber: null,
            spinningTheChamber: false,
        };
    }

    static defaultProps = {
        bulletInChamber: 8,
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    handleButtonClick = () => {
        if (!this.state.spinningTheChamber) {
            this.setState({
                spinningTheChamber: true,
            });
            this.timeout = setTimeout(() => {
                const chamber = Math.floor((Math.random() * 8) + 1);
                this.setState({
                    chamber,
                    spinningTheChamber: false,
                });
            }, 2000);
        }
    }

    render() {
        const string = (this.state.spinningTheChamber ? 'Spinning the champer and pulling the trigger!...' : (this.props.bulletInChamber === this.state.chamber ? 'BANG!!!!' : 'You\'re safe!'));
        return (
            <div>
                <p>{string}</p>
                <button onClick={this.handleButtonClick}>Pull the trigger!</button>
            </div>
        );
    };
}

export default RouletteGun;