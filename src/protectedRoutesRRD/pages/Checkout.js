import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { isLoggedIn } from '../utils';
export default function Checkout() {
    const navigate = useNavigate();

    useEffect(()=>{
        console.log(isLoggedIn())
        if(!isLoggedIn()){
            navigate('/login')
        }
    },[])

    function logoutUser(){
        localStorage.removeItem('isLoggedIn')
        navigate('/login')
    }

  return (
    <>
        <div>Checkout</div>
        <button onClick={logoutUser}>logout</button>
    </>
  )
}
