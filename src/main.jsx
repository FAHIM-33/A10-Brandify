import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './Pages/MainLayout'
import Home from './Pages/Home/Home'
import AddProducts from './Pages/Add/AddProducts'
import ErrorPage from './Pages/ErrorPage/ErrorPage'
import AuthProvider from './FirebaseAuth/AuthProvider'
import PrivateRoute from './FirebaseAuth/PrivateRoute'
import Login from './FirebaseAuth/Login'
import Register from './FirebaseAuth/Register'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/add',
        element: <PrivateRoute><AddProducts></AddProducts></PrivateRoute>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
    ]

  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
