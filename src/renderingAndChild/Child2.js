import React, {useState} from 'react'
import GrandChild2 from './GrandChild2'

export default function Child2() {

    const [child2Count, setChild2Count] = useState(100)
    console.log('child2 called')
  return (
    <>
        <div>Child2: {child2Count}</div>
        <button onClick={()=>setChild2Count(child2Count +1)}>Increase Count Value</button>

        <GrandChild2 count={child2Count}/>
    </>
  )
}
