import React, {useState} from 'react'
import UserDetails from './UserDetails';
import Login from './Login';
import EditUserDetails from './EditUserDetails';

export default function App2() {
    const [user, setUser] = useState('');

    function handleUserState(userValue){
        setUser(userValue)
    }
    function editUserAge(age){
      //what code you will write over here to handle the
      //state change
      // let userTemp = user;
      // userTemp.age = age;
      // setUser(userTemp);

      setUser({...user, age: age})

    }
  return (
    <>
        {user ?
            <> 
              <UserDetails user={user}/> 
              <EditUserDetails user={user} editUserAge={editUserAge}/>
            </>
            : 
            <Login setUserProp={handleUserState}/>}
    </>
  )
}
