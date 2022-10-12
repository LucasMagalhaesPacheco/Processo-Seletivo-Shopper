import React, { useContext } from 'react'
import { BASE_URL } from '../../constants/BASEURL'
import GlobalContext from '../../Global/GlobalContext'
import { ButtonPurchase, FormPurchase, H1, InputForm, SelectForm } from './Styled'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
const FinishPurchase = () => {
    const { states, setters } = useContext(GlobalContext)

    const today = new Date()
  
  
    const finishPurchase =  () => {
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
    <>
    <H1>Valor total: R$ {totalPriceString}</H1>
    <H1>Pegaremos algumas informações sua para fazer entrega</H1>
    <FormPurchase>
        <InputForm placeholder='Seu Nome completo' required/>
  
      <H1>Data de entrega:</H1>
      <SelectForm type='date' min={today} required/>
      
      <ButtonPurchase  onClick={() => finishPurchase()}> Finalizar pedido</ButtonPurchase>
    </FormPurchase>

    
    </>
  )
}

export default FinishPurchase