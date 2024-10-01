import React from 'react'

const userArr = [{name: 'a', age: 5}, {name: 'b', age: 10}, {name: 'c', age: 50}, {name: 'd', age: 41}, {name: 'e', age: 12}];

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
