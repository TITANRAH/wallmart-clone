import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { Product } from "../../typings/productTypings";
// import type {} from '@redux-devtools/extension' // required for devtools typing

interface CartState {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
}

export const useCartStore = create<CartState>()(
  devtools(
    persist(
      (set, get) => ({
        cart: [],
        addToCart: (product: Product) => {
          set((state) => ({
            cart: [...state.cart, product],
          }));
        },
        // Se utiliza splice() para eliminar un elemento del carrito en el índice productRemove. El segundo argumento 1 indica que solo se eliminará un elemento.
        removeFromCart: (product: Product) => {
          const productRemove = get().cart.findIndex(
            (p) => p.meta.sku === product.meta.sku
          );
          set((state) => {
            const newCart = [...state.cart];

            newCart.splice(productRemove, 1);
            return { cart: newCart };
          });
        },
      }),
      {
        name: "shopping-cart-storage",
      }
    )
  )
);
