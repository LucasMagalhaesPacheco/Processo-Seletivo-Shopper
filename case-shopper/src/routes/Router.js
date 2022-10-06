import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartPage from '../pages/CartPage/CartPage'
import HomePage from '../pages/HomePage/HomePage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import { Header } from '../components/Header/Header'
import GlobalStyle from '../GlobalStyle'

const Router  = () => {
return (
<BrowserRouter>
 <GlobalStyle />
 <Header />
 <Routes>
   <Route index exact default path="/" element={<HomePage />} /> 
   <Route exact path='/carrinho' element={<CartPage />}/>
   <Route exact path="*" element={<ErrorPage />} />
 </Routes>
</BrowserRouter>
 )
}

export default Router