//create store 
//we need to define the reducers 
//we need to connect the store to the application
//we need to subscrive to certain reducers in the code 

import React from 'react'
import { Provider } from 'react-redux';
import store from './store';
import Counter from './Counter';

export default function App() {
  return (
    <Provider store={store}>
        <Counter />
        
    </Provider>
  )
}
