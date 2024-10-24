import { useEffect, useState } from "react";

export default function useLocalStorage(key, initialValue){
    console.log(key)
    console.log(initialValue)
    const [data, setData] = useState(()=>{
        const localStorageData = JSON.parse(localStorage.getItem(key)) || initialValue
        return localStorageData
    });
    console.log(data);
    // useEffect(()=>{
    //     const localStorageData = JSON.parse(localStorage.getItem(key))
    //     console.log('local storage data');
    //     console.log(localStorageData)
    //     if(localStorageData){
    //         setData(parseInt(localStorageData));
    //     }
    // },[])

    useEffect(()=>{
        if(data){
            console.log('is executed?')
            localStorage.setItem(key, JSON.stringify(data));
        }
    },[data])

    return [data, setData];
}