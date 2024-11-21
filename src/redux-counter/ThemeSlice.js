import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: 'Theme',
    initialState: false,
    reducers: {
        toggleTheme(state) {
            return !state
        }
    }
})

export const {toggleTheme} = themeSlice.actions;
//these are utilised as part of our dispatcher ->

export default themeSlice.reducer; //this things goes and connect to our store