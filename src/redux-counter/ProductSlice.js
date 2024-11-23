import { createSlice } from "@reduxjs/toolkit";

const productAPISlice = createSlice({
    name: 'product',
    initialState: {
        loading: false,
        list: [],
        error: '' 
    },
    reducers: {
        fetchProducts(state){
            state.loading = true
        },
        apiFetchError(state, action){
            state.loading = false;
            state.error = action.payload || 'something went wrong'
        },
        updateAllProducts(state, action){
            state.loading = false;
            state.list = action.payload
            state.error = ''
        }
    }
})

export const {fetchProducts, apiFetchError, updateAllProducts} = productAPISlice.actions;
//these are utilised as part of our dispatcher ->

export default productAPISlice.reducer; //this things goes and connect to our store