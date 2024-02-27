import { Product } from "../typings/productTypings"

// declaro la funcion que tendra como parametro un array de productos
export function groupBySKU(products: Product[]): Record<string, Product[]>{

    // Reduce:

    // reduce es un método de los arreglos en JavaScript y TypeScript que se utiliza para reducir un arreglo a un solo valor. Toma una función de reducción y un valor inicial como argumentos.
    // En este caso, reduce se usa para recorrer cada elemento del arreglo products y acumularlos en un objeto.
    // Acumulador:
    
    // accumulator es el objeto que se irá acumulando durante el proceso. En este caso, acumula productos agrupados por SKU.
    // Se inicializa con un objeto vacío {} como valor inicial.
    // Iteración de Productos:
    
    // Para cada Product en el arreglo products, se ejecuta la función de reducción.
    // currentProduct representa el producto actual que está siendo procesado en la iteración.
    // Extracción de SKU:
    
    // Se extrae el SKU del producto actual mediante currentProduct.meta.sku. El SKU es un identificador único para ese producto.
    // Comprobación de Existencia del SKU:
    
    // Se verifica si el SKU del producto actual ya existe como clave en el objeto accumulator.
    // Si no existe (es decir, !accumulator[sku] es verdadero), se crea una nueva entrada en el objeto accumulator con el SKU como clave y se inicializa con un arreglo vacío [].
    // Agregando el Producto al Grupo SKU:
    
    // Después de asegurarse de que hay un arreglo asociado con el SKU actual, se agrega el currentProduct a ese arreglo dentro del objeto accumulator.
    // Retorno del Acumulador:
    
    // El objeto accumulator modificado se devuelve al final de la función de reducción.
    // Este objeto contendrá todos los productos agrupados por sus SKU.
    // En resumen, este código recorre el arreglo de productos, los agrupa por SKU y devuelve un objeto donde las claves son los SKU y los valores son arreglos de productos con el mismo SKU.

    return products?.reduce((acumulator: Record<string, Product[]>, currentProduct: Product)=> {

        const sku = currentProduct.meta.sku;

        if(!acumulator[sku]){
            acumulator[sku] = [];
        }

        acumulator[sku].push(currentProduct);
        return acumulator;

    },{})

}