import { ProductBusiness } from "../src/business/ProductBusiness"
import { IAtualizationStockProductInputDTO, ICheckoutProductCartInputDTO, ICreateProductInputDTO, IDeleteProductCartInputDTO, IGetProductInputDBDTO, IGetProductsInputDTO, IUpdateProductInputDTO } from "../src/interfaces/InterfaceProducts"
import { ProductDatabaseMock } from "./mocks/ProductDataBaseMock"
import { GenerateIdMock } from "./mocks/services/GenerateIdMock"

describe("Testando a ProductBusiness", () => {
    const productBusiness = new ProductBusiness(
        new ProductDatabaseMock(),
        new GenerateIdMock()
    )

    // ----------------------- --------------- Caminho Feliz ------------------------------------------ \\

    test("Caso de sucesso GetProducts", async () => {
        const input: IGetProductsInputDTO = {
               search: "",
               order: "name",
               sort: "ASC",
               limit: "10",
               page: "1"     
        }

        const response = await productBusiness.getAllProducts(input)

        expect(response.products.length).toBe(3)
    })

    test("Caso de sucesso CreateProductsCart", async () => {
        const input: ICreateProductInputDTO = {
            product_id: "16",
            product_name: "AZEITE  PORTUGUÊS EXTRA VIRGEM GALLO 500ML",
            product_amount: 1,
            product_price:  20.49

        } 

        const response = await productBusiness.createProductToCart(input)

        expect(response.message).toBe("Produto adicionado com sucesso no carrinho")
        
    })

    test("Caso de sucesso updateProductAmount", async () => {
        const input: IUpdateProductInputDTO = {
            id: "id-mock",
            amount: 3
        }

        const response = await productBusiness.updateProductAmount(input)

        expect(response.message).toBe("Produto atualizado com sucesso")
    })

    test("Caso de sucesso getAllProductsCart", async () => {
        const response = await productBusiness.getAllProductsCart()

        expect(response.cartProducts.length).toBe(3)
    })

    test("Caso de sucesso deleteProductCartById", async () => {
        const input: IDeleteProductCartInputDTO = {
            id: "id-mock"
        }

        const response = await productBusiness.deleteProductByCart(input)

        expect(response.message).toBe("Produto foi retirado do seu carrinho")
    })

    test("Caso de sucesso checkoutProductyByCart", async () => {
        const input: ICheckoutProductCartInputDTO = {
            id: "id-mock"
        }

        const response = await productBusiness.checkoutProductByCart(input)

        expect(response.message).toBe("Compra finalizada")
        
    })

    test("Caso de sucesso putProductStock", async () => {
        const input: IAtualizationStockProductInputDTO = {
            id: "id-mock"
        }

        const response = await productBusiness.putProductStock(input)

        expect(response.message).toBe("Produto foi retirado do stock")
    })
})