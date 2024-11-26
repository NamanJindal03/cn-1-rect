// import { fetchProductFailure, fetchProductSuccess, fetchProductRequest } from "./productSlice"
import { createAsyncThunk } from "@reduxjs/toolkit"
export const fetchProducts = createAsyncThunk("products/fetchProducts", async (dt) => {
        console.log(dt)
        const response = await fetch("https://fakestoreapi.com/products");
        if(!response.ok){
            throw new Error("failed to fetch products")
        }
        const data = await response.json();
        return data
    
    
    /* 3 states ->  */ 
    /* 
        error state ->
        success ->
        loading
    */
}) 
