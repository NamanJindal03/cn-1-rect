import React, {useState} from 'react'
import Comp from './Comp.js'
import Comp2 from './Comp2.js';

export default function App() {
    const [isComponent, setIsComponent] = useState(false);
    const [isLoading, setIsLoading] = useState(true); //false after api loading 

    function toggleComp(){
        setIsComponent(!isComponent);
    }

  return (
    <>
        {isComponent ? <Comp /> : <Comp2/>}
        {/* {isComponent && <Comp />} */}
        <button onClick={toggleComp} >Toggle Component State</button>
    </>
  )
}
