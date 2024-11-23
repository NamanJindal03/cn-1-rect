import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from './CartSlice';

export default function Products() {
    const productList = useSelector((state)=> state.product.list);
    const isLoading = useSelector((state) => state.product.loading);
    const error = useSelector((state) => state.product.error);
    const dispatch = useDispatch();
    const cartData = useSelector((store) => store.cart);


    // return <></>
//     const [productData, setProductData] = useState([]);
//     const cartData = useSelector((store) => store.cart);
//     const dispatch = useDispatch();
//     const [isLoading, setIsLoading] = useState(true);
//     const [apiError, setApiError] = useState('');
    
  return isLoading ? (<h1>Loading...</h1>) :
  error ? (<h2>{error}</h2>) :
    (
    <div>
       {
        productList.map((product)=>{
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