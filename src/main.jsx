import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Root from './Pages/Root/Root';
import Login from './Pages/Login/Login';
import Update from './Pages/Update/Update';
import AddCoffie from './Pages/AddProducts/AddCoffie';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/coffies'),
      },
      {
        path: '/add',
        element: <AddCoffie></AddCoffie>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/coffie/:id',
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffie/${params.id}`),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
