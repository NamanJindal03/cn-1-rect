import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { isLoggedIn } from '../utils';
export default function Signup() {
    const navigate = useNavigate();
    useEffect(()=>{
        if(isLoggedIn()){
            navigate(-1)
        }
    },[])
    function signupUser(){
        localStorage.setItem('isLoggedIn', true);
        navigate('/home')
    }
  return (
    <>
        <div>Signup</div>
        <button onClick={signupUser}>signup</button>
    </>
  )
}
