"use client";

import { useCartStore } from "@/stores/cartStore";
import { Product } from "../../typings/productTypings";
import { Button } from "./ui/button";
import RemoveFromCart from "./RemoveFromCart";

interface Props {
    product: Product;
}

function AddToCart(props: Props) {
    const { product } = props;
  // aqui llamo ami store y sus propiedades y funciones
  const [cart, addToCart] = useCartStore((state) => [
    state.cart,
    state.addToCart,
]);

  console.log("cart desde addtocart page", cart);

  const howManyInCart = cart.filter(
    (item) => item.meta.sku === product.meta.sku
  ).length;

  console.log("how many in cart", howManyInCart);

  const handleAdd = () => {
    console.log("add to cart", product);
    addToCart(product);
  };

  if (howManyInCart > 0) {
    return (
      <div className="flex space-x-5 items-center">
        <RemoveFromCart product={product} />
        <span>{howManyInCart}</span>
        <Button className="bg-walmart hover:bg-walmart/50" onClick={handleAdd}>
          +
        </Button>
      </div>
    );
  }


  return <Button onClick={handleAdd} className="bg-walmart hover:bg-walmart/50">Add to Cart</Button>;
}

export default AddToCart;
