import React, { useState } from 'react'
const allProducts = [
    {name: 'iphone', category: 'phone', price: 100, id: 1},
    {name: 'samsung', category: 'phone', price: 80, id: 2},
]

export default function App() {

    const [products, setProducts] = useState(allProducts);
    function startTheMagic(){
        let tempProd = [...products];
        tempProd.unshift({name: 'new-prod', category: 'home', price: 1000, id: 3});
        tempProd = tempProd.slice(0,2);
        setProducts(tempProd);
    }
  return (
    <>
        <ul>
            {
                products.map((product, index)=>{
                    return <li key={product.id}><input type="checkbox"/>name: {product.name} | price: {product.price}</li>
                })
            }
        </ul>
        <div>this is a new div</div>
        <button onClick={startTheMagic}>Magic</button>
    </>
  )
}
