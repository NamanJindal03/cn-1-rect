import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'products',
    initialState: {
        loading: false,
        products: [],
        error: null,
    },
    reducers: {
        fetchProductRequest(state){
            state.loading = true;
            state.error = null;
        },
        fetchProductSuccess(state, action){
            state.loading = false;
            state.products = action.payload;
        },
        fetchProductFailure(state, action){
            state.loading = false;
            state.error = action.payload;
        }
    }
})

export const {fetchProductFailure, fetchProductRequest, fetchProductSuccess} = productSlice.actions;
export default productSlice.reducer