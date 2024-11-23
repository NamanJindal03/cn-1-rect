import { configureStore} from "@reduxjs/toolkit";
import countReducer from './CountSlice';
import themeReducer from './ThemeSlice';
import cartReducer from './CartSlice';
import productReducer from './ProductSlice';
const store = configureStore({
    reducer: {
        counter: countReducer,
        theme: themeReducer,
        cart: cartReducer,
        product: productReducer
    }
})

export default store;