import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
    name: 'Counter',
    initialState: 100,
    reducers: {
        increment(state) {
            return state+1
        },
        decrement(state) {
            return state -1
        },
        incrementByAmount(state, action) {
            console.log(action)
            return state + action.payload
        },
    }
})

export const {increment, decrement, incrementByAmount} = countSlice.actions;
//these are utilised as part of our dispatcher ->

export default countSlice.reducer; //this things goes and connect to our store