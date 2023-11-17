import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { RouterProvider, createHashRouter } from 'react-router-dom'

import Login from './Pages/Login.jsx'
import Registro from './Pages/Registro.jsx'
import Catalogo from './Pages/Catalogo';
import Pago from './Pages/Pago.jsx';

const router = createHashRouter([
  {
    path: "/",
    element: <Catalogo />,
  },
  {
    path: "/registro",
    element: <Registro />,
  }
  ,
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/interfazPago",
    element: <Pago />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
