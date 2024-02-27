import GridOption from "../components/GridOption";

export default function Home() {
  return (
    <main className="flex-1">
{/* algunos ocupan 2 columnas otros dos filas probar para ver efecto */}
      <div className="grid grid-cols-1 grid-flow-row-dense md:grid-cols-4 gap-6 m-6">
        <GridOption
        title= "Swift gifts for less"
        image="https://links.papareact.com/1dy"
        className="bg-pink-200 h-full md:h-32"
        />
       
        <GridOption
        title= "Shop Wardrobe"
        image="https://links.papareact.com/8ko"
        className="bg-pink-100 col-span-2 row-span-2"
        />
        <GridOption
        title= "Shop Home"
        image="https://links.papareact.com/szu"
        className="bg-pink-200 row-span-2"
        />
        <GridOption
        title= "Shop Electronics"
        image="https://links.papareact.com/n7r"
        className="bg-pink-100 h-64"
        />
        <GridOption
        title= "Shop Toys"
        image="https://links.papareact.com/pj2"
        className="bg-green-100 h-64 col-span-2"
        />
        <GridOption
        title= "All you need for Match Day"
        image="https://links.papareact.com/m8e"
        className="bg-red-100 col-span-2 row-span-2"
        />
        <GridOption
        title= "Shop Gadgets"
        image="https://links.papareact.com/gs1"
        className="bg-orange-100 h-64"
        />
        <GridOption
        title= "Shop Beauty"
        image="https://links.papareact.com/4y0"
        className="bg-blue-100 h-64"
        />
        <GridOption
        title= "Shop Sports"
        image="https://links.papareact.com/sq2"
        className="bg-blue-100 h-64"
        />
        <GridOption
        title= "Enjoy free Shipping"
        image="https://links.papareact.com/9hf"
        className="bg-pink-100 h-64"
        />
        <GridOption
        title= "Flash Deals"
        image="https://links.papareact.com/qx7"
        className="bg-pink-100 h-64 col-span-2"
        />
      </div>
    </main>
  );
}


// lo que se realizo aqui es que para empezar en el header tenemos un fomruloario 
// qye conbtiene un input y un boton tipo submit en el formulario declaramos la funcion 
// handlesubmit y en la funcion pasamos el Router.push pero con query  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//   e.preventDefault();

//   const input = e.currentTarget.input.value;
//   router.push(`/search?q=${input}`)
// }

// por lo tanto lo que traiga el input sera el dato que le pasaremos a la url y se mostrara en la url
// por otra parte creamos el componente gridoption que como parametro recibe el title al instanciar son los nombres de las categorias 
// en esta misma page se instancian 

// entonces lo recibe en el componente y se lo pasamos a link 
// en donde decimos que la ruta sera search mas la query que sera title 


// function GridOption(props: Props) {
//   const { title, className, image } = props;
//   return (
//     <Link
//       href={{
//         pathname: "/search",
//         query: { q: title },
//       }}
//       className={cn("grid-options relative", className)}
//     ></Link>
//  por lo qyue le pasamos un nombre de titulo y al pincharlo en la url dira /search?q=${input}

// luego creamos la page search con ruta search y cada vez que pinchemos una caja nos lleva a ese compoennte

// en el componente search no tuve que pasar ningun id en la url simplemente acceder 
// a las props donde searchParams : q contiene el dato que se esta pasando por url

// documentacion de oxylab https://developers.oxylabs.io/