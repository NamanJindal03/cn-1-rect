import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch} from 'react-redux';
import { increment, decrement, incrementByAmount } from '../CountSlice';

const darkStyle = {
  color: 'green'
}

const lightStyle = {
  color: 'orange'
}

export default function Counter() {
    const counter = useSelector((store)=> store.counter);
    const theme = useSelector((store)=> store.theme);
    const dispatch = useDispatch();
  return (
    <>
        <button onClick={()=>dispatch(decrement())} style={theme ? darkStyle : lightStyle}>negative</button>
        <div className={theme ? 'light' : 'dark'}>Counter: {counter}</div>
        <button onClick={()=>dispatch(increment())} style={theme ? darkStyle : lightStyle}>positive</button>
        <button onClick={()=>dispatch(incrementByAmount(5))} style={theme ? darkStyle : lightStyle}>incre by 5</button>
    </>
  )
}
