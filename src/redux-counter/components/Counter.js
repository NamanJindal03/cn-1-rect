import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch} from 'react-redux';
import { increment, decrement, incrementByAmount } from '../CountSlice';
export default function Counter() {
    const counter = useSelector((store)=> store.counter);
    const dispatch = useDispatch();
  return (
    <>
        <button onClick={()=>dispatch(decrement())}>negative</button>
        <div>Counter: {counter}</div>
        <button onClick={()=>dispatch(increment())}>positive</button>
        <button onClick={()=>dispatch(incrementByAmount(5))}>incre by 5</button>
    </>
  )
}
