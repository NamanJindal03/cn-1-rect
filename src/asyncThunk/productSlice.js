import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./apiMiddleware";
const productSlice = createSlice({
    name: 'products',
    initialState: {
        loading: false,
        products: [],
        error: null,
    },
    reducers: {},
    extraReducers: (builder) =>{
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                console.log(action)
                state.error = action.error.message;
            })
    }

})

export const {fetchProductFailure, fetchProductRequest, fetchProductSuccess} = productSlice.actions;
export default productSlice.reducer