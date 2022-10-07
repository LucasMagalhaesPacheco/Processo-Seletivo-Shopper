import { type } from "os";
import { ProductDataBase } from "../dataBase/ProductDataBase";
import { InvalidError } from "../error/InvalidError";
import { MissingFields } from "../error/MissingFields";
import { NotFoundError } from "../error/NotFoundError";
import { IAtualizationStockProductInputDTO, IAtualizationStockProductOutputDTO, ICheckoutProductCartInputDTO, ICheckoutProductCartOutuptDTO, ICreateProductInputDTO, ICreateProductOutputDTO, IDeleteProductCartInputDTO, IDeleteProductCartOutputDTO, IFinalUpdateProductInputDTO, IGetProductInputDBDTO, IGetProductsCartsOutputDTO, IGetProductsInputDTO, IGetProductsOutputDTO, IPutStockInputDTO, IUpdateProductInputDTO, IUpdateProductOutputDTO } from "../interfaces/InterfaceProducts";
import { Products } from "../models/Products";
import { ProductsCarts } from "../models/ProductsCarts";
import GenerateId from "../services/GenerateId";



export class ProductBusiness {
    constructor(
    private productData = new ProductDataBase,
    private generateId = new GenerateId
    ){}

    public getAllProducts = async (input: IGetProductsInputDTO) => {
        const search = input.search || ""
        const order = input.order || "name"
        const sort = input.sort || "ASC"
        const limit = Number(input.limit) || 10
        const page = Number(input.page) || 1
        
        const offset = limit * (page - 1)

        if(typeof search !== "string") {
            throw new InvalidError("Sua busca não está em formato de string")
        }

        if(typeof order !== "string") {
            throw new InvalidError("Sua ordenação está em formato errado")

        }

        if(typeof limit !== "number" ){
            throw new InvalidError("Parâmetro 'limit' inválido")
        }

        if(typeof page !== "number") {
            throw new InvalidError("Parâmetro 'page' inválido")
        }

        const getProductDB: IGetProductInputDBDTO = {
            search,
            order,
            sort,
            limit, 
            offset
        }

        const productsDB = await this.productData.getProducts(getProductDB)

        if(!productsDB) {
            throw new NotFoundError()
        }

        const products = productsDB.map((productDB) => {
            return new Products(
                productDB.id,
                productDB.name,
                productDB.price,
                productDB.qty_stock
            )

            //Faz um map e colocar em uma classe Products os produtos que vieram do banco de dado o organizando.
        })
 
        
        
        const response: IGetProductsOutputDTO = {
             products
        }

        return response
    }

    public createProductToCart = async (input: ICreateProductInputDTO) => {
        const { product_id, product_name,product_amount, product_price} = input

        if(!product_id || !product_name || !product_amount || !product_price){
            throw new MissingFields()
        }

        if(typeof product_id !== "string") {
            throw new InvalidError("Parâmetro 'product_id' inválido ")
        }

        if(typeof product_name !== "string") {
            throw new InvalidError("Parâmetro 'product_name' inválido")
        }
          
        if(typeof product_price !== "number") {
            throw new InvalidError("Parâmetro 'product_price' inválido")
        }

        if(typeof product_amount !== "number") {
            throw new InvalidError("Parâmetro 'product_amount' inválido")
        }

        const id = this.generateId.generate()
        const totalPrice = product_price * product_amount
        const checkout: number = 0

        const newProduct = new ProductsCarts(
           id,
           product_id,
           product_name,
           product_price,
           checkout,
           product_amount,
           totalPrice
        )

        await this.productData.createCartProduct(newProduct)

        const response: ICreateProductOutputDTO = {
            message: "Produto adicionado com sucesso no carrinho",
            product: newProduct
        }

        return response
    }

    public updateProductAmount = async (input: IUpdateProductInputDTO) => {
        const {id, amount} = input


        if(typeof amount !== "number") {
            throw new InvalidError("Parâmetro 'product_amount' inválido")
        }

        if(typeof id !== "string") {
            throw new InvalidError("parâmetro 'id' inválido")
        }

        const productCartDBO = await this.productData.getProductById(id)

        if(!productCartDBO) {
            throw new InvalidError("Produto não se encontra em seu carrinho")
        }

        const price = productCartDBO.product_price

        const totalPrice = price * amount


        const UpdateInput: IFinalUpdateProductInputDTO = {
            id,
            amount,
            totalPrice
        }

        await this.productData.UpdateProductById(UpdateInput)

        const response: IUpdateProductOutputDTO = {
            message: "Produto atualizado com sucesso"
        }

        return response
    }

    public getAllProductsCart = async () => {
        
        const productCartDB = await this.productData.getAllProductsCart()

        if(!productCartDB) {
            throw new NotFoundError()
        }

        const products = productCartDB.map((products) => {
            return new ProductsCarts(
                products.id,
                products.product_id,
                products.product_name,
                products.product_price,
                products.checkout,
                products.product_amount,
                products.product_totalPrice
            )
        })

        const response: IGetProductsCartsOutputDTO = {
            cartProducts: products
        }
       
        return response
    }

    public deleteProductByCart = async (input: IDeleteProductCartInputDTO) => {
        const id = input.id

        if(!id) {
            throw new InvalidError("Id não foi passado")
        }

        const productDB = await this.productData.getProductById(id)

        if(!productDB) {
            throw new InvalidError("Produto não encontrado")
        }

        await this.productData.removeProductCart(id)

        const response: IDeleteProductCartOutputDTO = {
            message: "Produto foi retirado do seu carrinho"
        }

        return response

    }

    public checkoutProductByCart = async (input: ICheckoutProductCartInputDTO) => {
        const id = input.id

        if(!id) {
            throw new InvalidError("Id não foi passado")
        }

        const productDB = await this.productData.getProductById(id)

        if(!productDB) {
            throw new InvalidError("Produto não encontrado")
        }

        await this.productData.putCheckoutProduct(id)

        const response: ICheckoutProductCartOutuptDTO = {
            message: "Compra finalizada"
        }

        return response

    }

    public putProductStock = async (input: IAtualizationStockProductInputDTO) => {
        const id = input.id
       

        if(!id) {
            throw new InvalidError("Id não foi passado")
        }


        const productDB = await this.productData.getProductById(id)

        if(!productDB) {
            throw new InvalidError("Produto não encontrado")
        }

        const productId = productDB.product_id
        const amount = productDB.product_amount

        const productStock = await this.productData.getProductsById(productId)

        if(!productStock) {
            throw new InvalidError("Produto não encontrado no banco de dados")
        }

        if(amount > productStock.qty_stock) {
            throw new InvalidError("Quantidade de produtos é maior que a existe no banco de dados")
        }

        const newProduct: IPutStockInputDTO = {
            productId,
            amount
        }

        await this.productData.putProductStock(newProduct)

        const response: IAtualizationStockProductOutputDTO = {
            message: "Produto foi retirado do stock"
        }

        return response
    }

   
} 