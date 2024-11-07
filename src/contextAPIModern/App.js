import React, { useState } from 'react'
// import Provider from './context/Provider';
import Provider, { MyContext} from './context/Context';
import Child from './Child';
export default function App() {
    
  return (
    <Provider>
        <Child />
    </Provider>
  )
}
