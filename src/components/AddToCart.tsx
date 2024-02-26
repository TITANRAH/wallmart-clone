import { Product } from "../../typings/productTypings";

interface Props {
    product: Product;
}

function AddToCart(props: Props) {

  const {product} = props;
  
  return (
    <div>{product.price}</div>
  )
}

export default AddToCart