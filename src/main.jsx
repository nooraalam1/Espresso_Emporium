import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import MainContainer from './MainContainer';
import Home from './Home';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainContainer></MainContainer>,
    children: [{
      path: '/',
      element: <Home></Home>,
    }]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
