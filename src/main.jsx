import React from 'react'
import ReactDOM from 'react-dom/client'
import Home, {loader as bestSellersLoader} from './pages/Home.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Products, {loader as productsLoader} from './pages/Products.jsx'
import Contact from './pages/Contact.jsx'
import OurTeam from './pages/OurTeam.jsx'
import Testimonials from './pages/Testimonials.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import Populate from './components/Populate.jsx'
import Checkout from './pages/Checkout.jsx'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />} >
    <Route 
      index element={<Home />} 
      loader={productsLoader}
    />
    <Route 
      path='products' 
      element={<Products />} 
      loader={bestSellersLoader}
    />
    <Route path='contact' element={<Contact />} />
    <Route path='our-team' element={<OurTeam />} />
    <Route path='testimonials' element={<Testimonials />} />
    <Route path="checkout" element={<Checkout />} />
    
    <Route path="*" element={<ErrorPage />} />
    <Route path='populate' element={<Populate />} />
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>,
)
