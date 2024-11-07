import React from 'react'
import MyContext from './context/context'
export default function GrandChild() {
  return (
    <>
        <MyContext.Consumer>
            {
                (storeData)=>{
                    console.log(storeData)
                    return(
                        <>
                            <h3>this is going to be crazy</h3>
                            <p>{storeData?.missionData?.name}</p>
                            <button onClick={storeData.missionAccepted}>Accept the mission</button>
                        </>
                    )
                }   
            }
        </MyContext.Consumer>
        <h3>this is working</h3>
    </>
  )
}
