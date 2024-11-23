import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from "react-redux";
import store from "./store";
import App from './App'
import Cart from './Cart'
import Header from './components/Header';
const router = createBrowserRouter([
    {
        path: '/',
        element: <Header />,
        children: [
            {
                path: '/',
                element: <App />
            },
            {
                path: '/cart',
                element: <Cart />
            }
        ]
    }
])

export default function Main() {
  return (
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
  )
}
