import { Product } from "@/Utils/types";
import Image from "next/image";
import React from "react";

const BrandCard = ({ product }: { product: Product }) => {
  return (
    <div>
      <div
        className={`shadow-md border flex items-center justify-center flex-col p-4 hover:text-[#ef1721] duration-500 hover:-translate-y-2 cursor-pointer`}
      >
        <Image
          src="https://img.freepik.com/free-photo/new-smartphone-balancing-with-podium_23-2150296471.jpg?w=900&t=st=1711355488~exp=1711356088~hmac=9c2cbef9303325dddd58c096060e10dbafc1ad6c89644bbe7b0db75308904797"
          width={100}
          height={100}
          alt="image"
        ></Image>
        <h4 className="text-lg font-medium mt-4">{product.brand}</h4>
      </div>
    </div>
  );
};

export default BrandCard;
