import React from 'react'
import Wrap from './sampleWrapper/wrap'
import Provider from './context/Provider.js';
import Child from './Child.js';
import OutsideContext from './OutsideContext.js';
export default function App() {
  return (
    <>
        <Provider>
            <Child />
            <OutsideContext />
        </Provider>

        {/* <Wrap sample={'ssss'}>
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
        </Wrap> */}
    </>
  )
}
