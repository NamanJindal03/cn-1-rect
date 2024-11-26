import React from 'react'
import Products from './Products'
import store from './store'
import { Provider } from 'react-redux'
export default function App() {
  return (
    <Provider store={store}>
        <Products />
    </Provider>
  )
}
