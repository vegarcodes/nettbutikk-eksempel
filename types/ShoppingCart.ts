import { Product } from "./Product.type"

export type ShoppingCartItem = {
  product: Product;
  amount: number;
}

export type ShoppingCart = Record<number, ShoppingCartItem>;