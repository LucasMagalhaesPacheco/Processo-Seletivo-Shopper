import axios from "axios";
import React, { useContext } from 'react';
import GlobalContext from "../../Global/GlobalContext";
import { BASE_URL } from "../../constants/BASEURL";
import { ButtonAddCart, ProductCardList, ProductCardPrice, ProductPrice, ProductQuantity, ProductsCards, ProductSection } from "./styled";
import { BsFillCartPlusFill } from "react-icons/bs";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Products = () => {
 const {states, setters} = useContext(GlobalContext)

 const allProducts = states.productList && states.productList.map((products) => {
    
    const addToCart = (product) => { 
        const productToCart = states.productCartList && states.productCartList.filter((productCart) => {
        if (productCart.product_id === products.id) {
            return productCart
        } 
        return undefined
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
        setters.setAtualizationGets(states.atualizationGets + 1)
        toast.success("Adicionado ao carrinho")
    })
    .catch((err) => {
    
    }) 
} else {
    toast.error("Produto já foi adicionado ao carrinho!")
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
        <ButtonAddCart  onClick={() => addToCart(products)}>< BsFillCartPlusFill /> Comprar</ButtonAddCart>
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