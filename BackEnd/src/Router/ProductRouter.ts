import { Router } from "express";
import { ProductBusiness } from "../business/ProductBusiness";
import { ProductController } from "../controller/ProductController";
import { ProductDataBase } from "../dataBase/ProductDataBase";
import GenerateId from "../services/GenerateId";


export const productRouter = Router()

const productController = new ProductController(
    new ProductBusiness(
        new ProductDataBase,
        new GenerateId
    )
)


productRouter.get("/", productController.getAllProducts)
productRouter.get("/cart", productController.getAllProductsCart)
productRouter.post("/addcart", productController.createProductCart)

productRouter.delete("/delete/:id", productController.deleteProductCartById)
productRouter.put("/stock/:id", productController.putProductStock)
productRouter.put("/checkout/:id", productController.checkoutProductById)
productRouter.put("/:id", productController.putProductAmount)
