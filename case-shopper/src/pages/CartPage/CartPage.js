import React from 'react'
import { useContext } from 'react'
import GlobalContext from '../../Global/GlobalContext'
import { H1,  MainCartSection } from './Styled'
import 'react-toastify/dist/ReactToastify.css';
import ProductsCarts from '../../components/ProductsCart/ProductsCarts'
import FinishPurchase from '../../components/FinishPurchase/FinishPurchase'
import Load from '../../assets/Loading.gif'
const CartPage = () => {
  const { states } = useContext(GlobalContext)


  return (
    <MainCartSection>
      {states.productCartList.length > 0 ?
        <>
            <ProductsCarts />
            <FinishPurchase />  
        </>
        :
        <>
        <H1>carrinho vazio, escolha alguns produtos e logo estará em sua casa!</H1>
        <img src={Load} alt="Imagem de carregamento aguardando pedidos" />
        </>}
    </MainCartSection>
  )
}


export default CartPage