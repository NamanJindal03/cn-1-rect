import React, { useState } from 'react'
import MyContext from './context'

export default function Provider({children}) {
    const [mission, setMission] = useState({
        name: "learn context",
        studentId: '10',
        missionAccepted: false
    })
    function missionAccepted(){
        setMission({...mission, missionAccepted: true})
    }
  return (
    <MyContext.Provider
        value={{
            missionData: mission, 
            missionAccepted: missionAccepted
        }}
    >
        {children}
    </MyContext.Provider>
  )
}
