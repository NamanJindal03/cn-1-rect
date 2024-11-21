import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from './CartSlice';
export default function Products() {
    const [productData, setProductData] = useState([]);
    const cartData = useSelector((store) => store.cart)
    const dispatch = useDispatch();
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then((data) => {
                return data.json()
            })
            .then((data)=>{
                console.log(data)
                setProductData(data);
                
            })
    },[])
  return (
    <div>
       {
        productData.map((product)=>{
            return (
                <div style={{width: '150px'}} key={product.id}>
                    <h4>{product.title}</h4>
                    <span>{product.price}</span>
                    {cartData.includes(product.id) ? 
                        <button onClick={()=> dispatch(removeFromCart(product))}>Remove from cart</button> :
                        <button onClick={()=> dispatch(addToCart(product))}>Add to cart</button>
                    }
                </div>
            )
        })
       }
    </div>
  )
}