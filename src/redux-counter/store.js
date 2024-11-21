import { configureStore} from "@reduxjs/toolkit";
import countReducer from './CountSlice';
import themeReducer from './ThemeSlice';
import cartReducer from './CartSlice';
const store = configureStore({
    reducer: {
        counter: countReducer,
        theme: themeReducer,
        cart: cartReducer
    }
})

export default store;