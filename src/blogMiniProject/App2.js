import React, { useState } from 'react'
import App from './App'
export default function App2() {
    const [isVisible, setIsVisivble] = useState(false);
  return (
    <>
        <button onClick={() => {setIsVisivble(!isVisible)}}>Switch</button>
        {isVisible && <App />}
        
    </>
  )
}
