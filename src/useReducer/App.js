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
import reducer from "./reducers/counterReducer";
import { INCREMENT, DECREMENT } from "./actions/counterActions";
/* 
    added another functionality in your application -> added another action
*/
function Counter() {
    const [counter, dispatcher] = useReducer(reducer, {count: 0})
    return (
        <>
            <div>{counter.count}</div>
            <button onClick={() => { dispatcher({type: INCREMENT, data: 1}) }}>+</button>
            <button onClick={() => { dispatcher({type: DECREMENT}) }}>-</button>
            <button onClick={() => { dispatcher({type: INCREMENT, data: 5}) }}>+5</button>
            <button onClick={() => { dispatcher({type: INCREMENT, data: 10}) }}>+10</button>
        </>
    )
}
export default Counter;