import { Button } from "./button"
import { ShoppingBasket } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Toggle } from "./toggle";
import { ChevronLeft } from "lucide-react";

export default function SideBar(){
    return(
        <div className="flex-1">
            <Toggle>
                <ChevronLeft size={20} />
            </Toggle>
            <div className="pt-4 space-y-2 flex flex-col">
                <Button
                className="bg-gradient-to-tr from-blue-950 to-red-950  text-white rounded-md"
                >
                <Link href="/">Home</Link>
                </Button>
                <Button
                className="bg-gradient-to-tr from-blue-950 to-red-950  text-white rounded-md"
                >
                <Link href="/produtos">Nossos Produtos</Link>
                </Button>
                <Button
                className="bg-gradient-to-tr from-blue-950 to-red-950  text-white rounded-md"
                >
                <Link href="/about">Sobre nós</Link>
                </Button>
                <Button
                className="bg-gradient-to-tr from-blue-950 to-red-950  text-white rounded-md"
                >
                <Link href="/carrinho">Carrinho</Link>
                <ShoppingBasket size={20} />
                </Button>
          </div>
        </div>
    )
}   
