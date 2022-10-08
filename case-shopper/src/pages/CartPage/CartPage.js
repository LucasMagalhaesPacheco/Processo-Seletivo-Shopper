import React from 'react'
import { BASE_URL } from '../../constants/BASEURL'
import { useContext } from 'react'
import GlobalContext from '../../Global/GlobalContext'
import axios from 'axios'
import { ButtonPurchase, FormPurchase, H1, InputForm, MainCartSection,  SelectForm } from './Styled'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import ProductsCarts from '../../components/ProductsCart/ProductsCarts'
const CartPage = () => {
  const { states, setters } = useContext(GlobalContext)

  const today = new Date()


  const finishPurchas =  () => {
    states.productCartList && states.productCartList.map((purchaseItens) => {
      const finalizationPurchase = async () => {
        try {
           await axios.put(`${BASE_URL}/products/checkout/${purchaseItens.id}`)
        .then((res) => {
          setters.setAtualizationGets(states.atualizationGets + 1)
        })
         await axios.put(`${BASE_URL}/products/stock/${purchaseItens.id}`)
          .then((res) => {
            toast.success(`Compra finalizada com sucesso logo chegará em sua casa!`)
          })
        setters.setAtualizationGets(states.atualizationGets + 1)
        } catch (error) {
          toast.error("Produtos acima do limite permitido")
        }
      }

      return finalizationPurchase()
    })
  }

  let totalPrice = 0
  const mapPrices = states.productCartList && states.productCartList.map((purchase) => {
    totalPrice = totalPrice + purchase.product_totalPrice
    return purchase.product_totalPrice

  })


  const totalPriceString = totalPrice.toFixed(2)

  return (
    <MainCartSection>
      {states.productCartList.length > 0 ?
        <>
          <section>
            <ProductsCarts />

            
            
              <H1>Valor total: R$ {totalPriceString}</H1>
              <H1>Pegaremos algumas informações sua para fazer entrega</H1>
              <FormPurchase>
                  <InputForm placeholder='Seu Nome completo' />
            
                <H1>Data de entrega:</H1>
                <SelectForm type='date' min={today} />
              </FormPurchase>

              <ButtonPurchase  onClick={() => finishPurchase()}> Finalizar pedido</ButtonPurchase>
            
          </section>
        </>
        :
        <H1>carrinho vazio, escolha alguns produtos e logo estará em sua casa!</H1>}
    </MainCartSection>
  )
}


export default CartPage