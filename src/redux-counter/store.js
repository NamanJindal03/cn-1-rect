import { configureStore} from "@reduxjs/toolkit";
import countReducer from './CountSlice'
const store = configureStore({
    reducer: {
        counter: countReducer,
        //theme: themeReducer
    }
})

export default store;