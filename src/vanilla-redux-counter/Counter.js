import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
export default function Counter() {
    const count = useSelector((state)=> state.count);
    const dispatch = useDispatch();
  return (
    <div>
        <h1>Counter</h1>
        <h2>{count}</h2>
        <button onClick={()=> dispatch({type: 'INCREMENT'})}>Inc</button>
        <button onClick={()=> dispatch({type: 'DECREMENT'})}>DEC</button>
    </div>
  )
}
