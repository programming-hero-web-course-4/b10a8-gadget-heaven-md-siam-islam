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





const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader: () => fetch('../public/categories.json'),

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
        ],
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
