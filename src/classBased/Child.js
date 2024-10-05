import React from 'react'


export default class Child extends React.Component{

    constructor(){
        super();
        this.state = {counter: 0, willComponent: true};
        // this.handleChangeState = this.handleChangeState.bind(this);
    }
    // state= {counter: 10} //new syntax 

    handleChangeState = () => {
        //setState({...state, counter: state.counter+1})
        this.setState({counter: this.state.counter+1})
    }

    // handleChangeState(){
    //     this.setState({counter: this.state.counter+1})
    // }

    render(){
        return (
            <>
                {this.state.willComponent && <div >Child class Based component {this.props.title}</div>}
                <div>Counter: {this.state.counter}</div>
                <button onClick={this.handleChangeState}>Change a state</button>
            </>
        )
    }
}
