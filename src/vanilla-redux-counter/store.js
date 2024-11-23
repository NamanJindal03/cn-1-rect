import { createStore, combineReducers } from "redux";

const initialState = {
    count: 0
}
/* slice -> counterSlice */
function counterReducer(state = initialState, action){
    switch(action.type){
        case 'INCREMENT':
            return {...state, count: state.count + 1}
        case 'DECREMENT':
            return {...state, count: state.count -1}
        default:
            return state
    }
}

const initialThemeState = {
    theme: 'light'
}

function themeReducer(state = initialThemeState, action){
    switch(action.type){
        case 'TOGGLE_THEME':
            return {...state, theme: state.theme === 'light'? 'dark': 'light' }
        case 'INCREMENT':
            return {...state, theme: state.theme === 'light'? 'dark': 'light' }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    counter: counterReducer,
    theme: themeReducer
})

const store = createStore(rootReducer);

export default store;