import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import BioDataForm from './Componets/BioDataForm.jsx';
import Login from './Componets/LogIn.jsx';
import Signup from './Componets/Signup.jsx';
import { ProtectedRoute } from './Componets/ProtectedRoutes.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '',
        element:
        <ProtectedRoute>
        <BioDataForm />
        </ProtectedRoute>
      },
      {
        path: '/LogIn',
        element: <Login />
      },
      {
        path: '/Signup',
        element: <Signup />
      },
    ]
  }
  ])
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
