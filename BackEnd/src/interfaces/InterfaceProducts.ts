import { Products } from "../models/Products"
import { ProductsCarts } from "../models/ProductsCarts"

export interface IProductDBModelDTO {
    id: string,
    name: string,
    price: number,
    qty_stock: number
}

export interface IProductCartDBModelDTO {
    id: string,
    product_id: string,
    product_name: string,
    product_price: number,
    product_amount: number,
    product_totalPrice: number,
    checkout: number 
}

export interface IGetProductsInputDTO {
    search: string,
    order: string,
    sort: string,
    limit: string,
    page: string

}

export interface IGetProductInputDBDTO {
    search: string,
    order: string,
    sort: string,
    limit: number,
    offset: number
}

export interface IGetProductsOutputDTO {
    products: Products[]
}

export interface IGetProductsCartsOutputDTO {
    cartProducts: ProductsCarts[]
}

export interface ICreateProductInputDTO {
    product_id: string,
    product_name: string,
    product_price: number,
    product_amount: number
}

export interface ICreateProductOutputDTO {
    message: string,
    product: ProductsCarts
}

export interface IUpdateProductInputDTO {
    id: string,
    amount: number,
}

export interface IUpdateProductOutputDTO {
    message: string
}

export interface IFinalUpdateProductInputDTO {
    id: string,
    amount: number,
    totalPrice: number
}

export interface IDeleteProductCartInputDTO {
    id: string
}

export interface IDeleteProductCartOutputDTO {
    message: string
}

export interface ICheckoutProductCartInputDTO {
    id: string
}

export interface ICheckoutProductCartOutuptDTO {
    message: string
}

export interface IAtualizationStockProductInputDTO {
    id: string,
    
}

export interface IAtualizationStockProductOutputDTO {
    message: string
}

export interface IPutStockInputDTO {
    productId: string,
    amount: number
}
