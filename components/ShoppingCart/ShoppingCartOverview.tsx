"use client";

import { ShoppingCart } from "@/types/ShoppingCart.type";
import { SHOPPING_CART_LOCALSTORAGE_KEY } from "@/constants/shopping-cart";
import { useEffect, useState } from "react";
import "./ShoppingCart.css";

export default function ShoppingCartOverview() {
  const [shoppingCart, setShoppingCart] = useState<ShoppingCart>({});

  useEffect(() => { 
    setShoppingCart(JSON.parse(window.localStorage.getItem(SHOPPING_CART_LOCALSTORAGE_KEY) ?? "{}"));
  }, []);

  return (
    <div className="shopping-cart-overview">
      <ul>
        {Object.values(shoppingCart).map(item => (
          <li key={item.product.id}>
            <div>
              <h3>{item.product.title}</h3>
              <p>Antall: {item.amount}, ${item.product.price}</p>
            </div>
            <div>
              <p>
                <strong>${item.product.price * item.amount}</strong>
              </p>
            </div>
          </li>
        ))}
      </ul>
      <footer>
        <button type="button">Gå til utsjekk</button>
      </footer>
    </div>
  )
}