import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/MainFile/Main';
import Home from './Components/Home/Home';
import Card2 from './Components/Cardsection/Card2';
import Dashboard from './Components/Dashboard/Dashboard';
import Statistics from './Components/Statistics/Statistics';
import History from './Components/History/History';
import Wishlist from './Components/Wishlist/Wishlist';
import Addcart from './Components/Addcat/Addcart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Error from './Components/Errorpage/Error';







const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader: () => fetch('/categories.json'),
       
        children:[
        
         {
          path : "/",

          element:<Card2></Card2>,
          loader: () => fetch('/Data.json')
         },
         {
          path : "/card/:categories",

          element:<Card2></Card2>,
          loader: () => fetch('/Data.json')
         },
         {
          path : "/card",

          element:<Card2></Card2>,
          loader: () => fetch('/Data.json'),
         },
        ],
      },
      {
        path:"/dashboard",
        element:<Dashboard></Dashboard>,
        children: [
          {
            path:'/dashboard/Wishlist',
            element:<Wishlist></Wishlist>,
            loader: () => fetch('/Data.json'),
          },
          {
            index : true,
            element:<Addcart></Addcart>,
            loader: () => fetch('/Data.json'),
          },
          {
            path : "/dashboard/cart",
            element:<Addcart></Addcart>,
            loader: () => fetch('/Data.json'),
          },
        ]
      },
      {
        
      },
      {
        path:"/Statistics/:productId",
        element:<Statistics></Statistics>,
        loader: () => fetch('/Data.json'),
        
      },
      {
        path:"/Statistics",
        element:<Statistics></Statistics>,

        
      },
      {
        path:"/History",
        element:<History></History>,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
     <ToastContainer />
  </StrictMode>,
)
