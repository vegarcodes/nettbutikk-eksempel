"use client";

import Link from "next/link";
import Image from "next/image";
import "./ProductCard.css";
import { type Product } from "@/types/Product.type";
import { MouseEvent } from "react";
import { SHOPPING_CART_STORAGE_KEY } from "@/constants/shopping-cart";
import { ShoppingCart } from "@/types/ShoppingCart";

export type ProductCardProps = {
  productItem: Product
};

export default function ProductCard({
  productItem
}: ProductCardProps) {

  function handleAddToCart(event: MouseEvent) {
    event.preventDefault();

    const shoppingCart: ShoppingCart = JSON.parse(window.sessionStorage.getItem(SHOPPING_CART_STORAGE_KEY) ?? "{}");

    shoppingCart[productItem.id] = {
      product: productItem,
      amount: (shoppingCart[productItem.id]?.amount ?? 0) + 1
    } 

    window.sessionStorage.setItem(SHOPPING_CART_STORAGE_KEY, JSON.stringify(shoppingCart));
  }

  return (
    <article className="product-card">
      <Image 
        src={productItem.thumbnail} 
        alt=""
        width={400}
        height={300} 
      />
      <h2>
        <Link href={`/nettbutikk/produkt/${productItem.id}`}>
          {productItem.title} <span className="product-card__price">(${productItem.price})</span>
        </Link>
      </h2>
      <p>{productItem.description}</p>
      <p>
        <button 
          type="button"
          onClick={handleAddToCart}
        >
          Legg i handlekurv
        </button>
      </p>
    </article>
  )
}