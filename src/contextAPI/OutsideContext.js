import React from 'react'
import MyContext from './context/context'
export default function OutsideContext() {
  return (
    <>
        <h1>Start of outside Context</h1>
        <MyContext.Consumer>
            {
                (storeData)=>{
                    console.log(storeData)
                    return(
                        <>
                            <h3>this is going to be crazy</h3>
                            <p>{storeData?.missionData?.name}</p>
                            <button onClick={storeData?.missionAccepted}>Accept the mission</button>
                        </>
                    )
                }   
            }
        </MyContext.Consumer>
    </>
  )
}
