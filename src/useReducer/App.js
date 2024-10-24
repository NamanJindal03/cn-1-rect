// import React from "react";
// import { useState } from "react";
// function Counter() {
//     const [counter, setCounter] = useState(0)
//     return (
//         <>
//             <div>{counter}</div>
//             <button onClick={() => { setCounter(counter + 1) }}>+</button>
//             <button onClick={() => { setCounter(counter - 1) }}>-</button>
//         </>
//     )
// }
// export default Counter;
import React from "react";
import { useState, useReducer } from "react";

function reducer(state, payload){
    switch(payload.type){
        case 'increment':
            return state + 1
        case 'decrement':
            return state -1
        default: 
            return state
    }
}

function Counter() {
    const [counter, dispatcher] = useReducer(reducer, 0)
    return (
        <>
            <div>{counter}</div>
            <button onClick={() => { dispatcher({type: 'increment'}) }}>+</button>
            <button onClick={() => { dispatcher({type: 'decrement'}) }}>-</button>
        </>
    )
}
export default Counter;