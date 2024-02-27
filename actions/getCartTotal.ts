import { Product } from "../typings/productTypings";

export function getCartTotal(products: Product[]): string {

  // total es igual al reducer que parte en valor 0 luego toma el acomulador que es un string y lo transforma 
  // segun la iteracion que vaya haceindo por cada produycto currentproduct toma el acomulador y lo suma al precio 

  // por eso parte en cero y luego en la segunda vuelta cuando vuelta a apretar que quiero un producto mas 
  // vuelve a acumular toma el valor anterior y lo suma al nuevo y asi 
  const total = products.reduce(
    (accomulator: number, currentProduct: Product) => {
      return accomulator + currentProduct.price;
    },
    0
  );

  return `${products[0]?.currency ? products[0]?.currency : '' } ${total.toFixed(2)}` 
  // esto es USD 234.33
}
