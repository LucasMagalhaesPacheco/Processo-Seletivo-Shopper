import { IFinalUpdateProductInputDTO, IGetProductInputDBDTO, IProductCartDBModelDTO, IProductDBModelDTO, IPutStockInputDTO, IUpdateProductInputDTO } from "../interfaces/InterfaceProducts";
import { Products } from "../models/Products";
import { ProductsCarts } from "../models/ProductsCarts";
import BaseDataBase from "./BaseDataBase";


export class ProductDataBase extends BaseDataBase {
    public static PRODUCTS_TABLE = "Shopper_products"
    public static PRODUCTSCARTS_Table = "Shopper_Products_Cart"
    
    public ProductDBModel = (product: Products): IProductDBModelDTO => {
        const productDB: IProductDBModelDTO = {
            id: product.getId(),
            name: product.getName(),
            price: product.getPrice(),
            qty_stock: product.getQtyStock()
        }
        return productDB
    }

    public ProductCartsDBModel = (product: ProductsCarts): IProductCartDBModelDTO => {
        const productCartDB:  IProductCartDBModelDTO = {
            id: product.getId(),
            product_id: product.getProductId(),
            product_name: product.getProductName(),
            product_price: product.getProductPrice(),
            product_amount: product.getProductAmount(),
            product_totalPrice: product.getProductTotalPrice(),
            checkout: product.getCheckout()      
        }
        return productCartDB
    }

    public getProducts = async (productsDB: IGetProductInputDBDTO): Promise<IProductDBModelDTO[] | undefined> => {
        const search = productsDB.search
        const order = productsDB.order
        const sort = productsDB.sort
        const limit = productsDB.limit
        const offset = productsDB.offset

       const products: IProductDBModelDTO[] = await this.getConnetion()
       .where("name", "LIKE", `%${search}%`)
       .orderBy(order, sort)
       .limit(limit)
       .offset(offset)
       .select("*")
       .from(ProductDataBase.PRODUCTS_TABLE)
       
       return products
    }

    public getProductsCartByProduct_id = async (productId: string): Promise<IProductCartDBModelDTO | undefined> => {
        const ProductCartDB: IProductCartDBModelDTO[] = await this.getConnetion()
        .select()
        .from(ProductDataBase.PRODUCTSCARTS_Table)
        .where({product_id: productId})

        return ProductCartDB[0]
    }

    public getProductsById = async (id: string): Promise<IProductDBModelDTO| undefined> => {
        const productDB: IProductDBModelDTO[] = await this.getConnetion()
        .select()
        .from(ProductDataBase.PRODUCTS_TABLE)
        .where({id: id})

        return productDB[0]
        
    }

    public createCartProduct = async (product: ProductsCarts): Promise<void> => {
        const productDB =  this.ProductCartsDBModel(product)

        await this.getConnetion()
        .insert(productDB)
        .into(ProductDataBase.PRODUCTSCARTS_Table)
    }

    public getProductById = async (id: string): Promise<IProductCartDBModelDTO | undefined> => {
        const ProductCartDB: IProductCartDBModelDTO[] = await this.getConnetion()
        .select()
        .from(ProductDataBase.PRODUCTSCARTS_Table)
        .where({id: id})

        return ProductCartDB[0]
    }

    public UpdateProductById = async (input: IFinalUpdateProductInputDTO): Promise<void> => {
        const {id, amount, totalPrice} = input
        await this.getConnetion()
        .update({
            product_amount: amount,
            product_totalPrice: totalPrice
        })
        .where({id: id})
        .into(ProductDataBase.PRODUCTSCARTS_Table)
    }

    public getAllProductsCart = async (): Promise<IProductCartDBModelDTO[] | undefined> => {
        const productsCart: IProductCartDBModelDTO[] = await this.getConnetion()
        .select("*")
        .where({checkout: 0})
        .from(ProductDataBase.PRODUCTSCARTS_Table)

        return productsCart
    }

    public removeProductCart = async (id: string): Promise<void> => {
        await this.getConnetion()
        .from(ProductDataBase.PRODUCTSCARTS_Table)
        .delete()
        .where({id: id})
    }


    public putCheckoutProduct = async (id: string): Promise<void> => {
        await this.getConnetion()
        .into(ProductDataBase.PRODUCTSCARTS_Table)
        .where({id: id})
        .update({
            checkout: 1
        })
    }

    public putProductStock = async (input: IPutStockInputDTO): Promise<void> => {
        const {amount, productId} = input

        const actualStock = await this.getConnetion()
        .select("qty_stock")
        .where({id: productId})
        .from(ProductDataBase.PRODUCTS_TABLE)

        const atualizationStock = actualStock[0].qty_stock
        const newStock = (atualizationStock - amount)

        await this.getConnetion()
        .where({id: productId})
        .into(ProductDataBase.PRODUCTS_TABLE)
        .update({ qty_stock: newStock })
    }
}