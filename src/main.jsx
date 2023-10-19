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
import MyCart from './Pages/MyCart/MyCart'
import BrandPage from './Pages/BrandPage.jsx/BrandPage'
import axios from 'axios'
import Update from './Pages/Update/Update'
import Details from './Pages/Details/Details'

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
      {
        path: '/cart',
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
        loader: ()=> axios.get('http://localhost:5000/cart/')
      },
      {
        path: '/brand/:title',
        element: <BrandPage></BrandPage>,
        loader: ({ params }) => axios.get(`http://localhost:5000/search/${params.title}`)
      },
      {
        path: '/update/:id',
        element: <PrivateRoute><Update></Update></PrivateRoute>,
        loader: ({ params }) => axios.get(`http://localhost:5000/product/${params.id}`)
      },
      {
        path: '/details/:id',
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({ params }) => axios.get(`http://localhost:5000/product/${params.id}`)
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
