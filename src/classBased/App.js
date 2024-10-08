import React, {Component} from 'react'
import Child from './Child'

// export default function App() {
//   return (
//     <div>App</div>
//   )
// }

export default class Car extends Component{
    constructor(){
        super()
        this.state = {}
        console.log('first')
    }

    async getTodo(){
        const jsonData = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
        const data = await jsonData.json();
        this.setState(data)
    }
    componentDidMount(){
        this.getTodo();
    }

    componentDidUpdate(){
        //we have a targetted function, this does not get executed atht eht eim fo mount
    }

    render(){
        return (
            <>
                {console.log('second')}

                {this.state.userId}
                {this.state.id}
                {this.state.title}
                <div>Class Based App Component</div>
                <Child title={'abcd'}/>

            </>

        )
    }
}
