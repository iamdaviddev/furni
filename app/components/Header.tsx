import { ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { Nav } from "./Nav";


export function Header() {
  return (
    <header className="bg-[#3B5D4F] py-6">
      <div className="max-w-[1080px] mx-auto flex items-center justify-between">
        <div>
          <h3 className="text-2xl text-white">Furni<span className="text-[#F8C11E]">.</span></h3>
        </div>
        <div className="flex items-center gap-16">
          <Nav/>
          <div className="flex items-center gap-5 text-white">
            <User/>
            <ShoppingCart/>
          </div>
        </div>
      </div>
    </header>
  )
}

