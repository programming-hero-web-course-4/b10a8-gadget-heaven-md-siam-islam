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
import ErrorPage from './Components/Error/Error';
import Dashboard from './Components/Dashboard/Dashboard';
import Statistics from './Components/Statistics/Statistics';
import History from './Components/History/History';





const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader: () => fetch('../public/categories.json'),

        errorElement:<ErrorPage></ErrorPage>,

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
        element:<Dashboard></Dashboard>
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
  </StrictMode>,
)
