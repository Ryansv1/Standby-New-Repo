import Image from "next/image";
import { useEffect, useState } from "react";

interface ProductsProps{
    children: React.ReactNode;
    className: string;
}

export const Products = ({children, className}: ProductsProps) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
}

///////////////////////////////////////////////////////////
interface NameProps {
    ProductName: string;
    className: string;
}

Products.Name = ({ProductName, className}: NameProps) => {
    return (
        <h3 className={className}>{ProductName}</h3>
    )
}

///////////////////////////////////////////////////////////
interface ProductsPriceProps {
    ProductPrice?: number;
}

Products.Price = ({ProductPrice}: ProductsPriceProps) => {
    return (
        <p>{ProductPrice}</p>
    )
}
///////////////////////////////////////////////////////////
interface ProductsDescriptionProps {
    ProductDescription: string;
}

Products.Description = ({ProductDescription}: ProductsDescriptionProps) => {
    return (
        <p>{ProductDescription}</p>
    )
}
///////////////////////////////////////////////////////////

interface ProductsImageProps {
    className: string;
    width: number;
    height: number;
    src: string;
    alt: string;
}



Products.Image = ({className, width, height, src, alt}: ProductsImageProps) => {
 
    return(
        <Image src={src} alt={alt}className={className} width={width} height={height} />
    )
}