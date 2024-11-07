import React from 'react'
import Wrap from './sampleWrapper/wrap'
import Provider from './context/Provider.js';
import Child from './Child.js';
export default function App() {
  return (
    <>
        <Provider>
            <Child />
        </Provider>
        <Wrap sample={'ssss'}>
            {/* <div>these are my child divs</div>
            <p>dont you worry</p> */}
            {
                (someD)=>{
                    return(
                        <>
                        {console.log('triggered')}
                        <div>data showing up through cb and {someD}</div>
                        </>
                    )
                }
            }
        </Wrap>
    </>
  )
}
