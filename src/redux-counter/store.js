import { configureStore} from "@reduxjs/toolkit";
import countReducer from './CountSlice';
import themeReducer from './ThemeSlice';
const store = configureStore({
    reducer: {
        counter: countReducer,
        theme: themeReducer,
    }
})

export default store;