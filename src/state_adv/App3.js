import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App3 extends Component {
    state = { counter: 0 };

    increaseCounter2Times = () => {
        this.setState((state)=> {return {counter: state.counter + 1}})
        this.setState((state)=> {return {counter: state.counter + 1}})
    }

    render() {
        return (
            <>
                <div>Count: {this.state.counter}</div>
                <button onClick={this.increaseCounter2Times}>+2</button>
            </>
        );
    }
}

export default App3;