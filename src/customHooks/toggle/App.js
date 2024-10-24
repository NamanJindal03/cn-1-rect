import React, {useState} from 'react'
import useToggle from './useToggle';
export default function App() {

const [isTextVisible, alterTextVisibility] = useToggle(false);
  return (
    <>
        {isTextVisible ? <div>Present</div> : <div>Not Present</div>}
        <button onClick={alterTextVisibility}>Tumble</button>

        {/* setIsToggle(!isToggle) -> business logic */}
    </>
  )
}
