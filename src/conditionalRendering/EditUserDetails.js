import React, { useState } from 'react'

export default function EditUserDetails({user, editUserAge}) {

    function handleUserAge(){
        editUserAge(user.age + 1)
    }

    const [localUser, setLocalUser] = useState({name: 'naman', age: 10})

    
    function handleNameChange(e){
        console.log(e.target.value);
        setLocalUser({...localUser, name: e.target.value})
    }
    function handleAgeChange(e){
        setLocalUser({...localUser, age: e.target.value})
    }
  return (
    <>
        <input type="text" placeholder='name' value={localUser.name} onChange={handleNameChange}/>
        <input type="number" placeholder='age' value={localUser.age} onChange={handleAgeChange}/>
    </>
  )
}
