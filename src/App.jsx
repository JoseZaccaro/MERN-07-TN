import { useEffect, useState } from 'react';
import './App.css';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom';
import Events from './pages/Events';
import Componente404 from './pages/Componente404';
import Event from './pages/Event';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/events',
        element: <Events />
      },
      {
        path: '/event/:id',
        element: <Event />
      },
      // {
      //   path: '/events/:id',
      //   element: <Events />
      // },
      {
        path: '*',
        element: <Componente404 />
      }
    ]
  },

])


function App() {
  const [count, setCount] = useState(0)

  

  return (
    // <MainLayout>
    <RouterProvider router={router} />
    // {/* <Home /> */}
    // {/* </MainLayout> */}
  )
}

export default App
