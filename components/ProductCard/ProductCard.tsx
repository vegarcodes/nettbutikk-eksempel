"use client";

import Link from "next/link";
import Image from "next/image";
import "./ProductCard.css";
import { type Product } from "@/types/Product.type";
import { MouseEvent } from "react";
import { ShoppingCart } from "@/types/ShoppingCart.type";
import { SHOPPING_CART_LOCALSTORAGE_KEY } from "@/constants/shopping-cart";

export type ProductCardProps = {
  productItem: Product
};

export default function ProductCard({
  productItem
}: ProductCardProps) {
  function handleAddToCart(event: MouseEvent) {
    const shoppingCart: ShoppingCart = JSON.parse(window.localStorage.getItem(SHOPPING_CART_LOCALSTORAGE_KEY) ?? "{}");

    shoppingCart[productItem.title] = {
      product: productItem,
      amount: (shoppingCart[productItem.title]?.amount ?? 0) + 1
    };

    window.localStorage.setItem(SHOPPING_CART_LOCALSTORAGE_KEY, JSON.stringify(shoppingCart));
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
          {productItem.title} <span className="product-card__price">${productItem.price}</span>
        </Link>
        
      </h2>
      <p>{productItem.description}</p>
      <p>
        <button 
          type="button" 
          onClick={handleAddToCart}
        >
          Legg i handlekurven
        </button>
      </p>
    </article>
  )
}