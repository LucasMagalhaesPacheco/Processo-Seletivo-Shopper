import axios from "axios";
import React, { useContext } from 'react';
import GlobalContext from "../../Global/GlobalContext";
import { BASE_URL } from "../../constants/BASEURL";
import Cart from "../../assets/cartIcon.png"
import { ButtonAddCart, ProductCardList, ProductCardPrice, ProductPrice, ProductQuantity, ProductsCards, ProductSection } from "./styled";
import { BsFillCartPlusFill } from "react-icons/bs";

const Products = () => {
 const {states, setters} = useContext(GlobalContext)

 const allProducts = states.productList && states.productList.map((products) => {
    const addToCart = (product) => { 
        const productToCart = states.productCartList && states.productCartList.filter((productCart) => {
        if (productCart.productName === products.name) {
            return productCart
        } 
    })

    if(productToCart && productToCart.length === 0) {
        const body = {
            productId: product.id,
            productName: product.name,
            productAmount: 1,
            productPrice: product.price
        }
    
    axios.post(`${BASE_URL}/products/addcart`, body)
    .then((response) =>{
        console.log(response)
        setters.setAtualizationGets(states.AtualizationGets + 1)
        alert(`Produto adicionado ao carrinho`)
    })
    .catch((err) => {
        console.log(err.message)
    })
}

}

return (
    <ProductsCards key={products.id}>
    <h5>{products.name}</h5>
    <ProductCardList>
    <ProductQuantity>{products.qty_stock} - Unidades</ProductQuantity>
    <ProductPrice>R$ {products.price}</ProductPrice>
    </ProductCardList>
    <ProductCardPrice> 
        <ButtonAddCart key={products.id} onClick={() => addToCart(products)}>< BsFillCartPlusFill /> Comprar</ButtonAddCart>
    </ProductCardPrice>
  </ProductsCards>
)

})
  return (
    <ProductSection>
        {allProducts}
    </ProductSection>
  )
}

export default Products 