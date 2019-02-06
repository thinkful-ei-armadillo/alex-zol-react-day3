import React from 'react';

class HelloWorld extends React.Component {
    state = {
        who: 'world',
    };

    handleButtonClick(who) {
        this.setState({
            who,
        }); 
    };

    render() {
        return (
            <div>
                <button onClick={() => this.handleButtonClick('world')}>World</button>
                <button onClick={() => this.handleButtonClick('friend')}>Friend</button>
                <button onClick={() => this.handleButtonClick('react')}>React</button>
                <p>Hello, {this.state.who}.</p>
            </div>
        );
    };
}

export default HelloWorld;