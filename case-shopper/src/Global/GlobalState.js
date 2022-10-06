import React, { useState, useEffect } from 'react'
import GlobalContext from './GlobalContext'
import {BASE_URL} from '../constants/BASEURL'
import axios from 'axios'

const GlobalState = (props) => {
    let [page, setPage] = useState(1)
    let [productList, setProductList] = useState([])
    let [productCartList, setProductCartlist] = useState([])
    let [totalPriceCart, setTotalPriceCart] = useState([])
    let [atualizationGets, setAtualizationGets] = useState(0)
             

const GetAllProducts = () => {
    axios.get(`${BASE_URL}/products?page=${page}`)
    .then((response) => {
        console.log(response.data.products)
        setProductList(response.data.products)
    })
    .catch((err) => {
        console.log(err)
        alert("Não impossível encontrar produtos no momento, volte outra hora.")
    })
}


const GetAllProductsCart = () => {
    axios.get(`${BASE_URL}/products/cart`)
    .then((response) => {
        console.log(response.data.cartProducts)
        setProductCartlist(response.data.cartProducts)
    })
    .catch((err) => {
        console.log(err)
        alert("Seu carrinho não possui produtos, compre algum para adicionar")
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