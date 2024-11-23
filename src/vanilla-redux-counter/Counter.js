import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
export default function Counter() {
    const count = useSelector((state)=> state.counter.count);
    const theme = useSelector((state) => state.theme);
    console.log(theme)
    console.log(count)
    const dispatch = useDispatch();
  return (
    <div>
        <h1>Counter</h1>
        <h2>{count}</h2>
        <button onClick={()=> dispatch({type: 'INCREMENT'})}>Inc</button>
        <button onClick={()=> dispatch({type: 'DECREMENT'})}>DEC</button>
        <button onClick={()=> dispatch({type: 'TOGGLE_THEME'})}>Change Theme</button>
    </div>
  )
}
