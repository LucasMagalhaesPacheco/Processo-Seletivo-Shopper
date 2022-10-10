import React, { useContext } from 'react'
import GlobalContext from '../../Global/GlobalContext'
import { ButtonAmount, ButtonDeleteCart, ProductCart, ProductCartListQuantityAndPrice, ProductCartSection, ProductPriceCart } from './styled'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import { BASE_URL } from '../../constants/BASEURL'
import { BsFillCartXFill, BsCartCheckFill } from "react-icons/bs";

const ProductsCarts = () => {
  const { states, setters } = useContext(GlobalContext)
  const AllProductsCarts = states.productCartList && states.productCartList.map((productsINCarts) => {

  const updateAmountProduct = () => {
    const newAmount = Number((prompt("Quantas unidades você quer adicionar ao carrinho?")))

      const body = {
        amount: newAmount
      }

      axios.put(`${BASE_URL}/products/${productsINCarts.id}`, body)
        .then((res) => {
          setters.setAtualizationGets(states.atualizationGets + 1)
        })
        .catch((err) => {
          toast.error(err.response.message)
        })
    
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
      <ButtonAmount  onClick={() => updateAmountProduct()}>Atualizar Carrinho <BsCartCheckFill /> </ButtonAmount>
    </ProductCart>
  )
})
  return (
    <ProductCartSection>
      {AllProductsCarts}
    </ProductCartSection>
  )
}

export default ProductsCarts