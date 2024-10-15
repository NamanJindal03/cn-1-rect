import React, {useState} from 'react'

export default function App() {
    const [counter, setCounter] = useState(0);

    console.log('re rendered');

    function increaseCounter2Times(){
        console.log(counter);
        setCounter((c)=>{ return c +1});
        console.log(counter);
        setCounter((c)=>{ return c +1});
        console.log(counter);
    }

  return (
    <>
        <div>Count: {counter}</div>
        <button onClick={increaseCounter2Times}>+2</button>
    </>
  )
}
