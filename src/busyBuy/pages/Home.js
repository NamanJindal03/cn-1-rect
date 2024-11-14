import React, { useEffect, useState } from 'react'
import {getDocs, collection} from "firebase/firestore"
import { db } from '../db/firebaseInit'
export default function Home() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [priceFilterState, setPriceFilterState] = useState(75000);

    useEffect(()=>{
        (async function(){
            const localProducts = [];
            const querySnapshot = await getDocs(collection(db, "product"));
            querySnapshot.forEach((doc) => {
                localProducts.push({...doc.data(), id: doc.id})
            })
            setProducts([...localProducts]);
            setFilteredProducts([...localProducts]);
        })()
    },[])
    function filterProducts(filteredPrice){
        const newFilteredProducts = products.filter((product)=>{
            if(product.price <= filteredPrice){
                return true;
            }
        })
        console.log(newFilteredProducts)
        setFilteredProducts([...newFilteredProducts])
    }
    function handlePriceFilter(e){
        setPriceFilterState(e.target.value);
        filterProducts(e.target.value);
    }
  return (
    <>
        <div className='filterContainer'>
            <div>Price: {priceFilterState}</div>
            <input 
                type="range" 
                min={0} 
                max={100000} 
                value={priceFilterState} 
                onChange={handlePriceFilter}
                // onMouseUp={()=>filterProducts()}
            />
             
        </div>
        <div className='productContainer'>
            {filteredProducts.map((product)=>{
                return (
                    <div key={product.id} className='productCard'>
                        <div className='imgBox'>

                        </div>
                        <h6>{product.title}</h6>
                        <span>{product.price}</span>
                    </div>
                )
            })}
        </div>
    </>
  )
}
