import React, {Component} from 'react'
import Child from './Child'

// export default function App() {
//   return (
//     <div>App</div>
//   )
// }

export default class Car extends Component{

    render(){
        return (
            <>
                <div>Class Based App Component</div>
                <Child title={'abcd'}/>
            </>

        )
    }
}
