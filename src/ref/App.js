import React, {useEffect, useRef, useState} from 'react'

export default function App() {

    React.createRef

    const [counter, setCounter] = useState(0)

    const ref1 = useRef(null);
    const ref2 = useRef(null);
    console.log(ref1)
    // let simpleVar = 0;
    // simpleVar++;
    // ref1.current++;

    useEffect(()=>{
        ref1.current.focus()
    },[])

    // console.log(simpleVar);
    // console.log(ref1);
    function submitForm(e){
        e.preventDefault();
        console.log('called')
        console.log(ref1.current.value)
        console.log(ref2.current.value)
    }
  return (
    <>
        <form action="" onSubmit={submitForm}>
            <div>
                <label htmlFor="name"></label>
                <input type="text" id="name" ref={ref1}/>
            </div>
            <div>
                <label htmlFor="age"></label>
                <input type="text" id="age" ref={ref2}/>
            </div>
            {/* <button onClick={submitForm}>Submit</button> */}
            <button >Submit</button>
        </form>
        <div>Count: {counter}</div>
        <button onClick={()=>setCounter(counter+1) }>+1</button>

    </>
  )
}
