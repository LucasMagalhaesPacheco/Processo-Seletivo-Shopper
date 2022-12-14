import React from "react"
import Pagination from "../../components/Pagination/Pagination"
import Products  from '../../components/Products/Products'
import { HomeMainSection } from "./Styled"
import GlobalContext from "../../Global/GlobalContext"
import { useContext } from "react"
import Load from '../../assets/Loading.gif'
import SearchProducts from "../../components/SearchProducts/SearchProducts"
 const HomePage = () => {

  const {states} = useContext(GlobalContext)

  return (
    <HomeMainSection>
      <Pagination />
      < SearchProducts />
      {states.productList && states.productList.length > 0 ?
       <Products  /> :
      
       <img src={Load} alt="Carregamento de pagina" />
      
      }
      
      </HomeMainSection>
  )
}

export default HomePage
