import React from 'react'
import { Outlet } from 'react-router-dom'
export default function ProductLayout() {
  return (
    <>
        <h1>Product Heading</h1>
        <Outlet context={{destiny:true}}/>
        <footer>Product Layout Ending </footer>
    </>
  )
}
