import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

function Header() {
  return (
    <header className=" L¿bg-walmart">
      <Link href="/" className="">
        <Image 
          src="https://links.papareact.com/xsi"
          alt="Logo"
          width={150}
          height={150}
        />  
        
        </Link>

        <form className="flex  items-center bg-white rounded-full w-full flex-1">

          <input 
              type="text" 
              placeholder="Search Everything..." 
              className="flex-1 px-4 rounded-l-full outline-none placeholder:text-sm"/>
          <button>
            <Search 
            className="rounded-full h-10 px-2 w-10 bg-yellow-400"
            />
          </button>
        </form>
    </header>
  )
}

export default Header