import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from './apiMiddleware';
export default function Products() {
    const dispatch = useDispatch();
    const {loading, products, error} = useSelector((state)=> state.products);

    useEffect(()=>{
        dispatch(fetchProducts())
    },[])

    if(loading) return <div>loading...</div>
    if(error) return <div>Error: {error}</div>
  return (
    <div>
        {products.map((product)=>{
            return (<div key={product.id}>
                <h3>{product.title}</h3>
            </div>)
        })}
    </div>
  )
}
