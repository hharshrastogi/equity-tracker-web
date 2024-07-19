import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import FormData from './components/FormData.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import FormInput from './components/FormInput.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "form",
    element: <FormInput />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
// Follow process for creation of router dom for SPA and then check for a better form approach
// Create an nav bar that is aligned to the top and perform as an SPA linkhold
// route the data as [Object object] for storing in DB
// create the functionallity for calculations of the ledger

