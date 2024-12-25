import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Home/Ragistration/Login";
import Register from "../pages/Home/Ragistration/Register";
import Error from "../pages/Home/Error/Error";
import Detailes from "../pages/Lost&Found/Detailes";
import LostFoundItems from "../pages/Home/LostFoundItems";
import AllItems from "../pages/AllItems/AllItems";
import PrivateRoute from "./PrivateRoute";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <Error/>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
          path: '/lost-found-items',
          element: <LostFoundItems/>,
          loader: () => fetch('http://localhost:5000/items') 
        },
        {
          path: '/items/:id',
          element: <PrivateRoute><Detailes/></PrivateRoute>,
          loader: ({ params }) => fetch(`http://localhost:5000/items/${params.id}`)
        },
        {
          path: '/all-items',
          element: <AllItems/>,
          loader: () => fetch('http://localhost:5000/items') 
        },
        {
            path: 'login',
            element: <Login/>
        },
        {
            path: 'register',
            element: <Register/>
        },
      ]
    },
  ]);

  export default router;