import React from 'react'

const userArr = ['a', 'b', 'c', 'd', 'e'];

export default function Login({setUserProp}) {

    function loginUser(){
        let tempUser = userArr[Math.floor(Math.random()*10) % userArr.length];
        setUserProp(tempUser);
    }

  return (
    <div>
        <button onClick={loginUser}>Login</button>
        <button>Signup</button>
    </div>
  )
}
