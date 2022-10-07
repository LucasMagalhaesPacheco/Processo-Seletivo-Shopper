import BaseDataBase from "../../src/dataBase/BaseDataBase";
import { IFinalUpdateProductInputDTO, IGetProductInputDBDTO, IProductCartDBModelDTO, IProductDBModelDTO, IPutStockInputDTO } from "../../src/interfaces/InterfaceProducts";
import { Products } from "../../src/models/Products";
import { ProductsCarts } from "../../src/models/ProductsCarts";



export  class ProductDatabaseMock extends BaseDataBase {
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
   
       const products: IProductDBModelDTO[] = [
        {
            id:"16",
            name:"AZEITE  PORTUGUÊS EXTRA VIRGEM GALLO 500ML",	
            price: 20.49,
            qty_stock: 158
        },
        {
            id:"18",
            name:"BEBIDA ENERGÉTICA VIBE 2L",	
            price: 8.99,
            qty_stock: 659
        },
        {
            id:"19",
            name:"ENERGÉTICO RED BULL ENERGY DRINK 250ML",	
            price: 7.29,
            qty_stock: 909
        },
       ]
       
       return products
    }

    public getProductsCartByProduct_id = async (productId: string): Promise<IProductCartDBModelDTO | undefined> => {
       switch(productId) {
        case "16":
            return  {
                id: "id-mock",
                product_id: "16" ,
                product_name: "AZEITE  PORTUGUÊS EXTRA VIRGEM GALLO 500ML",
                product_price: 20.49,
                product_amount: 1,
                product_totalPrice: 20.49,
                checkout: 0,           
            }

       }
    }

    public createCartProduct = async (product: ProductsCarts): Promise<void> => {}

    public getProductById = async (id: string): Promise<IProductCartDBModelDTO | undefined> => {
        switch(id) {
            case "id-mock":
                return  {
                    id: "id-mock",
                    product_id: "16" ,
                    product_name: "AZEITE  PORTUGUÊS EXTRA VIRGEM GALLO 500ML",
                    product_price: 20.49,
                    product_amount: 1,
                    product_totalPrice: 20.49,
                    checkout: 0,           
                }
    
           }
    }

    public getProductsById = async (id: string): Promise<IProductDBModelDTO | undefined> => {
       switch(id) {
        case "16": 
        return {
            id:"16",
            name:"AZEITE  PORTUGUÊS EXTRA VIRGEM GALLO 500ML",	
            price: 20.49,
            qty_stock: 158
        }
        
    }

}

    public UpdateProductById = async (input: IFinalUpdateProductInputDTO): Promise<void> => {}

    public getAllProductsCart = async (): Promise<IProductCartDBModelDTO[] | undefined> => {
        const productsCart: IProductCartDBModelDTO[] = [
            {
                id: "id-mock",
                product_id: "16" ,
                product_name: "AZEITE  PORTUGUÊS EXTRA VIRGEM GALLO 500ML",
                product_price: 20.49,
                product_amount: 1,
                product_totalPrice: 20.49,
                checkout: 0,           
            },
            {
                id: "id-mock",
                product_id: "18" ,
                product_name: "BEBIDA ENERGÉTICA VIBE 2L",
                product_price: 8.99,
                product_amount: 1,
                product_totalPrice: 8.99,
                checkout: 0,           
            },
            {
                id: "id-mock",
                product_id: "19" ,
                product_name:"ENERGÉTICO RED BULL ENERGY DRINK 250ML",
                product_price: 7.29,
                product_amount: 1,
                product_totalPrice: 7.29,
                checkout: 0,           
            }
        ]
        

        return productsCart
    }

    public removeProductCart = async (id: string): Promise<void> => {}


    public putCheckoutProduct = async (id: string): Promise<void> => {}

    public putProductStock = async (input: IPutStockInputDTO): Promise<void> => {}
}