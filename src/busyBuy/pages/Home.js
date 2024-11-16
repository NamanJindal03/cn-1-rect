import React, { useEffect, useState } from 'react'
import {getDocs, collection} from "firebase/firestore"
import { db } from '../db/firebaseInit'
const allCategories = ['men', 'women', 'kitchen', 'electronics'];
export default function Home() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [priceFilterState, setPriceFilterState] = useState(2000);
    const [categoryFilterStates, setCategoryFilterStates] = useState({});

    useEffect(()=>{
        (async function(){
            const localProducts = [];
            const querySnapshot = await getDocs(collection(db, "product"));
            querySnapshot.forEach((doc) => {
                localProducts.push({...doc.data(), id: doc.id})
            })
            setProducts([...localProducts]);
            setFilteredProducts([...localProducts]);
        })();
        const localCategoryBuilder={};
        for(let i=0; i<allCategories.length;i++){
            localCategoryBuilder[allCategories[i]] = false;
        }
        setCategoryFilterStates(localCategoryBuilder) 
    },[])
    function filterProducts(filteredPrice, localCategoryFilterStates){
        console.log(localCategoryFilterStates)
        const newFilteredProducts = products.filter((product)=>{
            if(product.price <= filteredPrice){
                //another check -> includes -> 
                const truthyCategories = []
                for(let tempCategory in localCategoryFilterStates){
                    console.log(tempCategory)
                    console.log(localCategoryFilterStates[tempCategory])
                    if(localCategoryFilterStates[tempCategory]){
                        truthyCategories.push(tempCategory)
                    }
                }
                console.log(truthyCategories)
                if(truthyCategories.length === 0){
                    return true
                }
                console.log(truthyCategories);
                if(truthyCategories.includes(product.category)){
                    return true;
                }
            }
            
        })
        console.log(newFilteredProducts)
        setFilteredProducts([...newFilteredProducts]) 
    }
    function handlePriceFilter(e){
        setPriceFilterState(e.target.value);
        filterProducts(e.target.value, categoryFilterStates);
    }
    function handleCategoryFilter(e){
        let updatedCategoryList = {...categoryFilterStates,[e.target.name]: e.target.checked }
        setCategoryFilterStates(updatedCategoryList)
        filterProducts(priceFilterState, updatedCategoryList);
    }
  return (
    <>
        <div className='filterContainer'>
            <div>Price: {priceFilterState}</div>
            <input 
                type="range" 
                min={0} 
                max={2000} 
                value={priceFilterState} 
                onChange={handlePriceFilter}
                // onMouseUp={()=>filterProducts()}
            />
            <div>Category</div>
            {
                Object.keys(categoryFilterStates).map((categoryName)=>{
                    return(<>
                        <input 
                            type="checkbox" 
                            checked={categoryFilterStates[categoryName]} 
                            name={categoryName}
                            onChange={handleCategoryFilter}
                        />
                        <span>{categoryName}</span>
                    </>)
                })
            }
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
