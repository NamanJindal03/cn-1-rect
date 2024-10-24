import React, {useState, useEffect} from 'react'
import useLocalStorage from './useLocalStorage'

export default function App() {
    // const [data, setData] = useState(10)
    const [data, setData] = useLocalStorage('abcdefppppppp', 1000)
    console.log('in app comp', data)
    // useEffect(()=>{
    //     const localStorageData = localStorage.getItem('numb')
    //     if(localStorageData){
    //         setData(localStorageData);
    //     }
    // },[])
    // useEffect(()=>{
    //     if(data){
    //         localStorage.setItem('numb', data);
    //     }
    // },[data])

  return (
    <>
        {data}
        <button onClick={()=> setData(data + 1)}>+</button>
    </>
  )
}
