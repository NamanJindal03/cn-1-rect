import React, {useState} from 'react'
import UserDetails from './UserDetails';
import Login from './Login';

export default function App2() {
    const [user, setUser] = useState('');

    function handleUserState(userValue){
        setUser(userValue)
    }
  return (
    <>
        {user ? 
            <UserDetails user={user}/> : 
            <Login setUserProp={handleUserState}/>}
    </>
  )
}
