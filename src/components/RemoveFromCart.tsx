"use client";

import { useCartStore } from "@/stores/cartStore";
import { Product } from "../../typings/productTypings";
import { Button } from "./ui/button";

interface Props {
  product: Product;
}

function RemoveFromCart(props: Props) {
  const { product } = props;
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const handleRemove = () => {
    removeFromCart(product);
  }
  return <Button onClick={handleRemove} className="bg-walmart hover:bg-walmart/50">-</Button>;
}

export default RemoveFromCart;
