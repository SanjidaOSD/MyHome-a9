import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider
} from "react-router-dom";
import routes from './Routes/Routes.jsx';
import ContextProvider from './ContextProvider/ContextProvider.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={routes} />

      <ToastContainer />
    </ContextProvider>
  </React.StrictMode>,
)
