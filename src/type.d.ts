interface IProduct {
   id: number
   name: string
   price: number
   quantity: number
   image: any
}
interface Ibalance {
   amount: number
}
interface IPurchasedProduct {
   id: number
   productId: number
   name: string
   price: number
   quantity: number
   image: any
}
type IPurchasedProductS = {
   productId: number
   name: string
   price: number
   quantity: number
   image: any
}

const TIME_OUT_MS = 1000
