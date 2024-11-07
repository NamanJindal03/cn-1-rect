import React, {useContext} from 'react'
import { MyContext } from './context/Context'

export default function GrandChild() {
    const consumer = useContext(MyContext);
    console.log(consumer)
  return (
    <>
        <h3>this is going to be crazy</h3>
        <p>{consumer}</p>
        {/* <button onClick={storeData.missionAccepted}>Accept the mission</button> */}
    </>
  )
}
