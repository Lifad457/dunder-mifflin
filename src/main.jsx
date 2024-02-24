import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout.jsx'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />} >
    <Route index element={<Home />} />


    
    {/* <Route path="*" element={<ErrorPage />} /> */}
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>,
)
