export namespace OrdersTypes {
  export interface CartProduct {
    amount: number
    code: string
    id: string
    img: string
    price: string
    title: string
  }

  export interface Raw {
    email: string
    fio: string
    number: string
    carts: CartProduct[]
    id: string
  }
}