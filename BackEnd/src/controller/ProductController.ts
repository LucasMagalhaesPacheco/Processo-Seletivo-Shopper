import { Request, Response } from "express";
import { ProductBusiness } from "../business/ProductBusiness";
import { IAtualizationStockProductInputDTO, ICheckoutProductCartInputDTO, ICreateProductInputDTO, IDeleteProductCartInputDTO, IGetProductsInputDTO, IUpdateProductInputDTO } from "../interfaces/InterfaceProducts";



export class ProductController {
    constructor(
      private productBusiness = new ProductBusiness
    ){}

    public getAllProducts = async (req: Request, res: Response) => {
        try { 
            const search = req.query.search as string
            const order = req.query.order as string
            const sort = req.query.sort as string
            const limit = req.query.limit as string
            const page =  req.query.page as string

            const products: IGetProductsInputDTO = {
                search,
                order,
                sort,
                limit,
                page
            }
  
            const response =  await this.productBusiness.getAllProducts(products)

            res.status(200).send(response)
        } catch (error) {
            if(error instanceof Error) {
                return res.status(res.statusCode).send({message: error.message})
            } // Verificação para não ser necessário tipar o Erro como Any

            res.status(500).send("Erro inesperado") // Erro de servidor
        }
    }

    public createProductCart = async (req: Request, res: Response) => {
        try {
            const {productId, productName, productAmount, productPrice} = req.body

            const input: ICreateProductInputDTO = {
                product_id: productId,
                product_name: productName,
                product_amount: productAmount,
                product_price: productPrice
            }

            const response = await this.productBusiness.createProductToCart(input)

            res.status(201).send(response)

        } catch (error) {
            if(error instanceof Error) {
                return res.status(res.statusCode).send({message: error.message})
            } // Verificação para não ser necessário tipar o Erro como Any

            res.status(500).send("Erro inesperado") // Erro de servidor
        }
    }

    public putProductAmount =  async (req: Request, res: Response) => {
        try {
            const {amount} = req.body
            const id = req.params.id

            const input: IUpdateProductInputDTO = {
              id,
              amount,
            }
            const response = await this.productBusiness.updateProductAmount(input)

            res.status(201).send(response)
        } catch (error) {
            if(error instanceof Error) {
                return res.status(res.statusCode).send({message: error.message})
            } // Verificação para não ser necessário tipar o Erro como Any

            res.status(500).send("Erro inesperado") // Erro de servidor
        }
    }

    public getAllProductsCart = async (req: Request, res: Response) => {
        try {
            
            const response = await this.productBusiness.getAllProductsCart()

            res.status(200).send(response)

        } catch (error) {
            if(error instanceof Error) {
                return res.status(res.statusCode).send({message: error.message})
            } // Verificação para não ser necessário tipar o Erro como Any

            res.status(500).send("Erro inesperado") // Erro de servidor  
        }
    }

    public deleteProductCartById = async (req: Request, res: Response) => {
      try {
        const id = req.params.id 

        const input: IDeleteProductCartInputDTO = {
            id
        }

        const response = await this.productBusiness.deleteProductByCart(input)

        res.status(202).send(response)
      } catch (error) {
        if(error instanceof Error) {
            return res.status(res.statusCode).send({message: error.message})
        } // Verificação para não ser necessário tipar o Erro como Any

        res.status(500).send("Erro inesperado") // Erro de servidor
      }
    }

    public checkoutProductById = async (req: Request, res: Response) => {
        try {
            const id = req.params.id 

            const input: ICheckoutProductCartInputDTO = {
                id
            }
            
            const response = await this.productBusiness.checkoutProductByCart(input)

            res.status(202).send(response)

        } catch (error) {
            if(error instanceof Error) {
                return res.status(res.statusCode).send({message: error.message})
            } // Verificação para não ser necessário tipar o Erro como Any
    
            res.status(500).send("Erro inesperado") // Erro de servidor
        }
    }

    public putProductStock = async (req: Request, res: Response) => {
        try {
            const id = req.params.id
            
            
            const input: IAtualizationStockProductInputDTO = {
                id,
                
            }

            const response = await this.productBusiness.putProductStock(input)
                                   
            res.status(202).send(response)

        } catch (error) {
            if(error instanceof Error) {
                return res.status(res.statusCode).send({message: error.message})
            } // Verificação para não ser necessário tipar o Erro como Any
    
            res.status(500).send("Erro inesperado") // Erro de servidor
        }
    }

    
}