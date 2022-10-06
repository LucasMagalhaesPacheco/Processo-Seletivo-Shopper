import React, { useState, useEffect } from 'react'
import GlobalContext from './GlobalContext'
import {BASE_URL} from '../constants/BASEURL'
import axios from 'axios'

const GlobalState = (props) => {
    const [page, setPage] = useState(1)
    const [productList, setProductList] = useState([])
    const [productCartList, setProductCartlist] = useState([])
    const [totalPriceCart, setTotalPriceCart] = useState(0)
    const [atualizationGets, setAtualizationGets] = useState(0)
    
const GetAllProducts = () => {
    axios.get(`${BASE_URL}/products?page=${page}`)
    .then((response) => {
        setProductList(response.data.products)   
    })
    .catch((err) => {
    })
}


const GetAllProductsCart = () => {
    axios.get(`${BASE_URL}/products/cart`)
    .then((response) => {
        setProductCartlist(response.data.cartProducts)
    })
    .catch((err) => {      
    })
}

useEffect(() => {
    GetAllProducts()
    GetAllProductsCart()
}, [atualizationGets])


const states = {page, productList, productCartList, totalPriceCart, atualizationGets}
const setters = {setPage, setProductList, setProductCartlist, setTotalPriceCart, setAtualizationGets}

return (
    <GlobalContext.Provider value={{states, setters}}>
      {props.children}
    </GlobalContext.Provider>
)
}

export default GlobalState