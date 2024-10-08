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
        console.log('first')
    }

    componentDidMount(){
        console.log('third')
    }

    render(){
        return (
            <>
                {console.log('second')}
                <div>Class Based App Component</div>
                <Child title={'abcd'}/>
            </>

        )
    }
}
