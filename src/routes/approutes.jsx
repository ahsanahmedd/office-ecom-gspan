
import React from 'react'
import {  Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from '../components/home.jsx'
import NotFoundPage from '../components/notfound.jsx';
import Contact from '../components/contact.jsx';
import AboutUs from '../components/aboutus.jsx';
import ProductDetails from '../components/productsdetail.jsx';
import CartPreview from '../components/cartpreview.jsx';
import ProductListing from '../components/productlisting.jsx';
import Checkout from '../components/checkout.jsx';
import OrderSuccess from '../components/ordersuccess.jsx';


const routes = () => {
    return (
        <>
        <div  className='bg-grid'></div>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="//product/:productId" element={<ProductDetails/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/about" element={<AboutUs/>}></Route>
            <Route path="/cart" element={<CartPreview/>}></Route>
            <Route path="/collection" element={<ProductListing/>}></Route>
            <Route path="/checkout" element={<Checkout/>}></Route>
            <Route path="/order-success" element={<OrderSuccess/>}></Route>
            <Route path="*" element={<NotFoundPage/>}></Route>    
            </Routes>   
            </>
    )
}


export default routes