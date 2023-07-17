import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Header from '../componenets/Header/Header'
import Footer from '../componenets/Footer/Footer'
import Home from '../componenets/Home/Home'
import Logout from '../componenets/Logout/logout'
import ProductDetails from '../componenets/ProductDetails/ProductDetails'


function RoutesLayout() {
  return (
    <>
    <Router>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/logout' element={<Logout/>}/>
            <Route path='/product/:id' element={<ProductDetails/>}/>
            
            


        </Routes>
        <Footer/>
    </Router>

    </>
  )
}

export default RoutesLayout