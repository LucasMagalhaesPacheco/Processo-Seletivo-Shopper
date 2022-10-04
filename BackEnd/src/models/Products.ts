
export class Products {
 constructor(
    private id: string,
    private name: string,
    private price: number, 
    private qty_stock: number, 
 ){}

 public getId = () => {
    return this.id
 }
 public getName = () => {
    return this.name
 }
 public getPrice = () => {
    return this.price
 }
 public getQtyStock = () => {
    return this.qty_stock
 }

 public setQtyStock = (newStock: number) => {
    return this.qty_stock = newStock
 }



}