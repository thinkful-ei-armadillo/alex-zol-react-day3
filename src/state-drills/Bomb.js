import React from 'react';

class Bomb extends React.Component {
    state = {
        count: 0
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                count: this.state.count + 1,
            })
        }, 1000)
    }


    render() {
        let string = ''; 
        if (this.state.count >= 8){
            string = 'BOOM';
            clearInterval(this.interval);
        } else if(this.state.count % 2 === 0){
            string = 'tick';
        } else {
            string = 'tock';
        }
        return (<div>
                    <p>{string}</p>
                </div>
                )
    }
}

export default Bomb