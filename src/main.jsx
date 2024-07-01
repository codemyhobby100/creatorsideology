import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './components/Layout/Main';
import Home from './components/Home/Home'
import Study from './components/Study/Study'
import Contact from './components/Contact/Contact'
import Creator from './components/Creator/Creator';
import About from './components/About/About';
import './fonts/fonts.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/study',
        element: <Study/>
      },
      {
        path: '/Contact',
        element: <Contact/>
      },
      {
        path: '/Creator',
        element: <Creator/>
      },
      {
        path: '/about',
        element: <About/>
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
