import React from 'react'
import { useNavigate } from 'react-router-dom';
export default function Login() {
    const navigate = useNavigate();

    function loginUser(){
        localStorage.setItem('isLoggedIn', true);
        navigate('/home')
    }
  return (
    <>
        <div>Login</div>
        <button onClick={loginUser}>signup</button>
    </>
  )
}
