import React, {useState} from 'react'
import Child from './Child';
import Child2 from './Child2';
import './style.css'

console.log('global component state')

export default function App() {
    console.log('App recalled');
    const [count, setCount] = useState(0);
    const [go, setGo] = useState(false);
  return (
    <>
        {console.log('here')}
        <div>Count: {count}</div> 
        <button onClick={()=>setCount(count +1)}>Increase Count Value</button>

        <h1>Child Component Area</h1>
        <Child count={count}/>
        <Child2 />
        {/* `${}`*/}

        <h3 >CSS class conditional rendering</h3>

        {/*bulb class */}
        {/* <div className={go ? "bulb red": "bulb green"}>Bulb</div>  */}
        <div className={`bulb ${go ? "red": "green"}`}>Bulb</div> 

        <button onClick={()=>setGo(!go)}>Change Situation</button>

    </>
  )
}
