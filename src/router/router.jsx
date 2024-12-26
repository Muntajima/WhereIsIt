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
import AddLostFound from "../pages/AddLostFound/AddLostFound";
import MyItems from "../pages/MyItems/MyItems";
import Updated from "../pages/MyItems/Updated";
import AllRecoverdItems from "../pages/AllRecoverd/AllRecoverdItems";


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
          loader: () => fetch('https://where-is-it-jet.vercel.app/items') 
        },
        {
          path: '/items/:id',
          element: <PrivateRoute><Detailes/>
          </PrivateRoute>,
          loader: ({ params }) => fetch(`https://where-is-it-jet.vercel.app/items/${params.id}`)
        },
        {
          path: '/allItems',
          element: <AllItems/>,
          loader: () => fetch('https://where-is-it-jet.vercel.app/items') 
        },
        {
          path: '/addItems',
          element: <AddLostFound/>
        },
        {
          path: '/myItems',
          element: <MyItems/>,
          loader: () => fetch("https://where-is-it-jet.vercel.app/items")
        },
        {
          path: '/updateItems/:id',
          element: <Updated/>,
          loader: ({params}) => fetch(`https://where-is-it-jet.vercel.app/items/${params.id}`)
        },
        {
          path: '/allRecovered ',
          element: <AllRecoverdItems/>,
          loader: () => fetch("https://where-is-it-jet.vercel.app/items")
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