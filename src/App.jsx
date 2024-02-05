import React from 'react'
import Home from './screens/Home'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Login from './screens/Login';
const router = createBrowserRouter([{ path: "/", element: <Home></Home> }, { path: "/login", element: <Login></Login> }]);
const App = () => {
  return (
    <div>
      <RouterProvider router={router}>
      </RouterProvider>

    </div>
  )
}

export default App
