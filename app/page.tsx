'use client'

import Footer from "@/components/footer";
import Container from "@/components/ui/container";
import MainContainer from "@/components/ui/main-container";
import Link from "next/link";
import Image from "next/image";
import { Products } from "@/components/ui/products";

export default function Home() {

  return (
    <>
      <MainContainer className="flex-1 bg-gradient-to-tr from-blue-950 to-red-950">
        <Container className="mt-24 py-10 text-black text-center bg-white italic">
          a new gaming experience
        </Container>
        <Container className="flex flex-col my-4 items-center justify-center bg-white md:flex-row">
          <Products className="p-4 rounded-md my-2 hover:bg-gray-200 duration-200">
            <Products.Image alt="Aa"className="" src="/images/product.png" width={200} height={200}></Products.Image>
            <Products.Name className="" ProductName="1"></Products.Name>
            <Products.Description ProductDescription="description"></Products.Description>
            <Products.Price ProductPrice={120}></Products.Price>
          </Products>
          <Products className="p-4 rounded-md my-2 hover:bg-gray-200 duration-200">
            <Products.Image alt="Aa"className="" src="/images/product.png" width={200} height={200}></Products.Image>
            <Products.Name className="" ProductName="MacBook"></Products.Name>
            <Products.Description ProductDescription="description"></Products.Description>
            <Products.Price ProductPrice={120}></Products.Price>
          </Products>
          <Products className="p-4 rounded-md my-2 break-all hover:bg-gray-200 duration-200">
            <Products.Image alt="Aa" className="" src="/images/product.png" width={200} height={200}></Products.Image>
            <Products.Name className="break-words" ProductName="Acer Nitro 5"></Products.Name>
            <Products.Description ProductDescription="description"></Products.Description>
            <Products.Price ProductPrice={120}></Products.Price>
          </Products>
          <Products className="p-4 rounded-md my-2 hover:bg-gray-200 duration-200">
            <Products.Image alt="Aa"className="" src="/images/product.png" width={200} height={200}></Products.Image>
            <Products.Name className="" ProductName="Lenovo"></Products.Name>
            <Products.Description ProductDescription="description"></Products.Description>
            <Products.Price ProductPrice={120}></Products.Price>
          </Products>
        </Container>
        <Footer/>
      </MainContainer>
    </>
  );
}
