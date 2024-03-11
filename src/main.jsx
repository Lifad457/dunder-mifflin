import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Products, {loader as productsLoader} from './pages/Products.jsx'
import Contact from './pages/Contact.jsx'
import OurTeam from './pages/OurTeam.jsx'
import Testimonials from './pages/Testimonials.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import Populate from './components/Populate.jsx'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />} >
    <Route index element={<Home />} />
    <Route 
      path='products' 
      element={<Products />} 
      loader={productsLoader}
    />
    <Route path='contact' element={<Contact />} />
    <Route path='our-team' element={<OurTeam />} />
    <Route path='testimonials' element={<Testimonials />} />
    <Route path='populate' element={<Populate />} />
    
    <Route path="*" element={<ErrorPage />} />
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>,
)
