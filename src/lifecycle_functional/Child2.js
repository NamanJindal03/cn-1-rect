import React, {useEffect, useState} from 'react'

let timerId;

export default function Child2() {

    const [count, setCounter] = useState(Math.floor(Math.random()*10));
    useEffect(() => {
        let intervalId = setInterval(() => {
            console.log(count)
            // count++;
            // console.log(count++);
            setCounter(count + 1)
        }, 1000);
        return () => clearInterval(intervalId);
    }, [count])

    /* 
        setCounter((state)=>{
            return state + 1;
        })
    */

    useEffect(() => {
        timerId = setTimeout(() => {
            console.log(count)
            // count++;
            // console.log(count++);
            setCounter(count + 1)
        }, 1000);
    }, [count])

    useEffect(()=>{
        return () => {
            console.log('clearing out the timer', timerId)
            clearTimeout(timerId)
        }
    },[])
  return (

    <div>Child2: {count}</div>
  )
}


