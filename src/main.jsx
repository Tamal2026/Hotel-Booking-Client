import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayOut from './LayOut/MainLayOut';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './Components/Provider/AuthProvider';
import Rooms from './Pages/Rooms/Rooms';
import RoomDetails from './Components/RoomDetails/RoomDetails';
import AddBooking from './Components/AddBooking/AddBooking';
import MyBooking from './Components/MyBooking/MyBooking';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AddReview from './Components/Review/AddReview';
import ErrorPage from './Components/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },{
        path:'/login',
        element:<Login></Login>
      },{
        path:"/register",
        element:<Register></Register>
      },{
        path:"rooms",
        element:<Rooms></Rooms>
      },{
        path:"details/:id",
        element:<RoomDetails></RoomDetails>,
        loader:({params})=>fetch(`http://localhost:5000/rooms/${params.id}`)
      },{
        path:"/addbooking",
        element:<AddBooking></AddBooking>,
        loader:()=>fetch('http://localhost:5000/rooms')
      },{
        path:'/mybookings',
        element:<PrivateRoute><MyBooking></MyBooking></PrivateRoute>
      },{
        path:'/addreview/:id',
        element:<AddReview></AddReview>,
        loader:({params})=>fetch(`http://localhost:5000/rooms/${params.id}`)
      },  {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <AuthProvider>
 <RouterProvider router={router} />
 </AuthProvider>
  </React.StrictMode>,
)
