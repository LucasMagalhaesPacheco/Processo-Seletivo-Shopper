
export class ProductsCarts {
    constructor(
        private id: string,
        private product_id: string,
        private product_name: string,
        private product_price: number,
        private checkout: number = 0,
        private product_amount: number = 0,
        private product_totalPrice: number
    ){}

    public getId = () => {
        return this.id
     }

     public getProductId = () => {
        return this.product_id
     }
     public getProductName = () => {
        return this.product_name
     }
     public getProductPrice = () => {
        return this.product_price
     }

     public getCheckout = () => {
        return this.checkout
     }

     public getProductAmount = () => {
        return this.product_amount
     }

     public getProductTotalPrice = () => {
        return this.product_totalPrice
     }
          
     public setProductAmount = (newAmount: number) => {
        return this.product_amount = newAmount
     }

     public setProductTotalPrice = (newTotalPrice: number) => {
        return this.product_totalPrice = newTotalPrice
     }

}