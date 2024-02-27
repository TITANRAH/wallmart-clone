import { Product } from "../typings/productTypings";

export function getCartTotal(products: Product[]): string {
  const total = products.reduce(
    (accomulator: number, currentProduct: Product) => {
      return accomulator + currentProduct.price;
    },
    0
  );

  return `${products[0]?.currency} ${total.toFixed(2)}`
}
