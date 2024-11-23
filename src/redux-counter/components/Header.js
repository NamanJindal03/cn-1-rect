import React, {useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {fetchProducts, apiFetchError, updateAllProducts} from '../ProductSlice';
export default function Header() {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchProducts())
        fetch('https://fakestoreapi.com/products')
            .then((data) => {
                return data.json()
            })
            .then((data)=>{
                console.log(data)
                dispatch(updateAllProducts(data))
            })
            .catch((err)=>{
                dispatch(apiFetchError())
            })
    },[]);
    return (
        <>

            <Outlet />
        </>
    )
}
