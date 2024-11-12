import React, {useEffect} from 'react'
import { Outlet, useNavigate  } from 'react-router-dom'
import { isLoggedIn } from '../utils';
export default function PrivateRoutes() {
    const navigate = useNavigate();

    useEffect(()=>{
        console.log(isLoggedIn())
        if(!isLoggedIn()){
            navigate('/login')
        }
    },[])
  return (
    <Outlet />
  )
}
