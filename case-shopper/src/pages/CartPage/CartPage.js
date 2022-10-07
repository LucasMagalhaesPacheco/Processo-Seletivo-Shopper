import React from 'react'
import { BASE_URL } from '../../constants/BASEURL'
import { useContext } from 'react'
import GlobalContext from '../../Global/GlobalContext'
import axios from 'axios'
import { ButtonDeleteCart, ButtonPurchase, FormPurchase, H1, InputForm, MainCartSection, ProductCart, ProductCartListQuantityAndPrice, ProductCartSection, ProductPriceCart, SelectForm } from './Styled'
import { ButtonAddCart } from '../../components/Products/styled'
import { BsFillCartXFill, BsCartCheckFill } from "react-icons/bs";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const CartPage = () => {
  const { states, setters } = useContext(GlobalContext)

  const today = new Date()

  const AllProductsCarts = states.productCartList && states.productCartList.map((productsINCarts) => {

    const updateAmountProduct = () => {
      const newAmount = Number((prompt("Quantas unidades você quer adicionar ao carrinho?")))

      if (newAmount > productsINCarts[0] && productsINCarts[0].qty_stock) {
        toast.error(`A quantidade solicitada está indisponível em nosso estoque, escolha um valor menor de produto ${productsINCarts[0].qty_stock}`)
      } else {
        const body = {
          'amount': newAmount
        }

        axios.put(`${BASE_URL}/products/${productsINCarts.id}`, body)
          .then((res) => {
            setters.setAtualizationGets(states.atualizationGets + 1)
          })
          .catch((err) => {
          })
      }
    }

    const removeProductFromCart = () => {
      axios.delete(`${BASE_URL}/products/delete/${productsINCarts.id}`)
        .then((res) => {
          toast.success("Produto removido com sucesso")
          setters.setAtualizationGets(states.atualizationGets + 1)
        })
        .catch((err) => {
        })
    }

    return (
      <ProductCart key={productsINCarts.id}>
        <h5>{`Nome: ${productsINCarts.product_name}`} </h5>
        <ProductCartListQuantityAndPrice>
          <p>{`Quantidade: ${productsINCarts.product_amount}`}</p>
          <ProductPriceCart>{` Preço: R$ ${productsINCarts.product_price}`}</ProductPriceCart>
        </ProductCartListQuantityAndPrice>
        <ProductPriceCart>{` Total: R$ ${productsINCarts.product_totalPrice}`}</ProductPriceCart>
        <ButtonDeleteCart onClick={() => removeProductFromCart()}> Remover <BsFillCartXFill /></ButtonDeleteCart>
        <ButtonAddCart key={productsINCarts.id} onClick={() => updateAmountProduct()}>Atualizar Carrinho <BsCartCheckFill /> </ButtonAddCart>
      </ProductCart>
    )
  })

  const finishPurchase = () => {
    states.productCartList && states.productCartList.map((purchaseItens) => {
      const finalizationPurchase = () => {
        axios.put(`${BASE_URL}/products/checkout/${purchaseItens.id}`)
        axios.put(`${BASE_URL}/products/stock/${purchaseItens.id}`)
          .then((res) => {
            toast.success(`Compra finalizada com sucesso logo chegará em sua casa!`)
          })
        setters.setAtualizationGets(states.atualizationGets + 1)
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
            <ProductCartSection>
              {AllProductsCarts}
            </ProductCartSection>

            <section />
            <section>
              <H1>Valor total: R$ {totalPriceString}</H1>
              <H1>Pegaremos algumas informações sua para fazer entrega</H1>
              <FormPurchase>
                <div>
                  <InputForm placeholder='Seu Nome completo' />
                </div>

                <H1>Data de entrega:</H1>
                <SelectForm type='date' min={today} />
              </FormPurchase>

              <ButtonPurchase onClick={() => finishPurchase()}> Finalizar pedido</ButtonPurchase>
            </section>
          </section>
        </>
        :
        <H1>carrinho vazio, escolha alguns produtos e logo estará em sua casa!</H1>}
    </MainCartSection>
  )
}


export default CartPage