import React, {useEffect, useState} from 'react'
import Child from './Child'
import Child2 from './Child2'
import TodoApi from './TodoApi'
export default function App() {
    const [isChildComp, setIsChild] = useState(false)
    const [isChildComp2, setIsChild2] = useState(false)
    
  return (
    <>
        <div>App</div>
        <button onClick={()=> setIsChild(!isChildComp)}>Toggle Child Existence</button>
        <button onClick={()=> setIsChild2(!isChildComp2)}>Toggle child 2222 Existence</button>
        {isChildComp && <Child />}
        {isChildComp2 && <Child2 />}

        <h1>TODO Task</h1>
        <TodoApi/>

        <h1>Display List</h1>
    </>
  )
}
