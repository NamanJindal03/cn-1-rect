import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
export default function NotFound() {
    const navigate = useNavigate();
    useEffect(()=>{
        setTimeout(()=>{
            navigate('/home', {state: {comingFromRedirection: true}})
        },5000)
    },[])
  return (
    <div>NotFound</div>
  )
}
