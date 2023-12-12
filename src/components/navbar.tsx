"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import { AlignJustify, ShoppingBasket, Sidebar } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Toggle } from "./ui/toggle";
import SideBar from "./ui/sidebar";

export default function Navbar() {
  const [mobile, setMobile] = useState(false);
  const [sideBar, setSideBar] = useState(false);

  const checkWindowSize = () =>{
    if (window.innerWidth <= 880) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }

  const handleToggleChange = () =>{
    setSideBar(!sideBar)
  }

  useEffect(() => {
    checkWindowSize();
    window.addEventListener("resize", checkWindowSize);
    return () =>{
      window.removeEventListener("resize", checkWindowSize);
    };

  }, []);

  
  return (
    <>
      {mobile ? (
            <div className="min-w-full fixed flex flex-row bg-transparent justify-between">
               <div className="px-6 py-4 text-3xl text-white italic">
                 <span>standby</span>
               </div>
               <div className="px-6 py-4">
                <Toggle className="h-full p-2" pressed={sideBar} onPressedChange={handleToggleChange}>
                  {sideBar ? (
                    <SideBar/>
                  ):(
                    <AlignJustify size={20} color="white"/>
                  )}
                </Toggle>
               </div>
            </div>
      ) : (
        <div className="min-w-full fixed flex flex-row bg-transparent justify-between">
          <div className="px-6 py-4 text-3xl text-white italic">
            <span>standby</span>
          </div>
          <div className="py-4 space-x-2">
            <Button
              className="hover:bg-white hover:text-black rounded-md"
              variant={"outline"}
            >
              <Link href="/">Home</Link>
            </Button>
            <Button
              className="hover:bg-white hover:text-black rounded-md"
              variant={"outline"}
            >
              <Link href="/produtos">Nossos Produtos</Link>
            </Button>
            <Button
              className="hover:bg-white hover:text-black rounded-md"
              variant={"outline"}
            >
              <Link href="/about">Sobre nós</Link>
            </Button>
            <Button
              className="hover:bg-white hover:text-black rounded-md gap-2"
              variant={"outline"}
            >
              <Link href="/carrinho">Carrinho</Link>
              <ShoppingBasket size={20} />
            </Button>
          </div>
          <div className="px-6 py-4">
            <div className="flex flex-row justify-center items-center rounded-md bg-white px-6 py-2 duration-200 hover:bg-gray-200">
              <Image
                src={"/images/user-image.jpg"}
                alt={"user"}
                width={50}
                height={30}
              />
              <h1>User</h1>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
