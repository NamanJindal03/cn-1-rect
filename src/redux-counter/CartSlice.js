import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'Cart',
    initialState: [],
    reducers: {
        /* 
            {...state, add new thing} //so as rerender happens properly 
        */
        addToCart(state, action){
            //automatically -> 
            if(!state.includes(action.payload.id)){
                state.push(action.payload.id)
            }
            return state
        },
        removeFromCart(state, action){
            const newState = state.filter((productId)=>{
                if(productId === action.payload.id){
                    return false;
                }
                return true
            })
            return newState
        }
    }
})

export const {addToCart, removeFromCart} = cartSlice.actions;
//these are utilised as part of our dispatcher ->

export default cartSlice.reducer; //this things goes and connect to our store