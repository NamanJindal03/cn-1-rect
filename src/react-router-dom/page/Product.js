import React from 'react'
import { useParams, useOutletContext } from 'react-router-dom'

export default function Product() {
    console.log(useParams());
    console.log(useOutletContext());
  return (
    <>
        <div>Product</div>
    </>
  )
}
