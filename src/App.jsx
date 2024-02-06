import React from 'react'
import Home from './screens/Home'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Login from './screens/Login';
import Signup from './screens/Signup';
const router = createBrowserRouter([{ path: "/", element: <Home></Home> }, { path: "/login", element: <Login></Login> }, { path: "/signup", element: <Signup></Signup> }]);
const App = () => {
  return (
    <div>
      <RouterProvider router={router}>
      </RouterProvider>

    </div>
  )
}

export default App
