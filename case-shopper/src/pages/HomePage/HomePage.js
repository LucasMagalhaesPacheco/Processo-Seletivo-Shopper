import React from "react"
import Pagination from "../../components/Pagination/Pagination"
import Products  from '../../components/Products/Products'
import { HomeMainSection } from "./Styled"

 const HomePage = () => {
  return (
    <HomeMainSection>
      <Pagination />
      <Products  />
      </HomeMainSection>
  )
}

export default HomePage
