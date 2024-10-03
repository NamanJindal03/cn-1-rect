import React, { useState } from 'react'

export default function EditUserDetails({user, editUserAge, editUserName}) {

    function handleUserAge(){
        editUserAge(user.age + 1)
    }

    // const [localUser, setLocalUser] = useState({name: 'naman', age: 10})

    
    function handleNameChange(e){
        console.log(e.target.value);
        editUserName(e.target.value);
        // setLocalUser({...localUser, name: e.target.value})
    }
    function handleAgeChange(e){
        // setLocalUser({...localUser, age: e.target.value})
        editUserAge(e.target.value)
    }
  return (
    <>
        <input type="text" placeholder='name' value={user.name} onChange={handleNameChange}/>
        <input type="number" placeholder='age' value={user.age} onChange={handleAgeChange}/>
    </>
  )
}
