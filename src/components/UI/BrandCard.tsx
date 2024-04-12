import { Product } from "@/Utils/types";
import Image from "next/image";
import React from "react";

const BrandCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 py-8 px-10 lg:px-24 mx-auto">
      <div
        className={`shadow-md border flex items-center justify-center flex-col p-4 hover:text-[#ef1721] duration-500 hover:-translate-y-2 cursor-pointer`}
      >
        <Image
          src="https://img.freepik.com/free-photo/new-smartphone-balancing-with-podium_23-2150296471.jpg?w=900&t=st=1711355488~exp=1711356088~hmac=9c2cbef9303325dddd58c096060e10dbafc1ad6c89644bbe7b0db75308904797"
          width={100}
          height={100}
          alt="image"
        ></Image>
        <h4 className="text-lg font-medium mt-4">Apple</h4>
      </div>
      <div
        className={`shadow-md border flex items-center justify-center flex-col p-4 hover:text-[#ef1721] duration-500 hover:-translate-y-2 cursor-pointer`}
      >
        <Image
          src="https://img.freepik.com/free-vector/realistic-gradient-smartphone-different-views_52683-28259.jpg?w=900&t=st=1711355495~exp=1711356095~hmac=7aad42f0aa04243af38839e6ff33fbf70cd9908637a1c2f153e98a0cb026f9aa"
          width={100}
          height={100}
          alt="image"
        ></Image>
        <h4 className="text-lg font-medium mt-4">Samsung</h4>
      </div>
      <div
        className={`shadow-md border flex items-center justify-center flex-col p-4 hover:text-[#ef1721] duration-500 hover:-translate-y-2 cursor-pointer`}
      >
        <Image
          src="https://img.freepik.com/free-vector/flat-design-smartphone-different-perspectives_52683-52558.jpg?w=900&t=st=1711355491~exp=1711356091~hmac=a6585d717210b76e2d2b78f22e9fe0aaf0058b29b5c7fc507ba334658c2d526b"
          width={100}
          height={100}
          alt="image"
        ></Image>
        <h4 className="text-lg font-medium mt-4">Oppo</h4>
      </div>
      <div
        className={`shadow-md border flex items-center justify-center flex-col p-4 hover:text-[#ef1721] duration-500 hover:-translate-y-2 cursor-pointer`}
      >
        <Image
          src="https://img.freepik.com/free-photo/new-smartphone-balancing-with-podium_23-2150296471.jpg?w=900&t=st=1711355488~exp=1711356088~hmac=9c2cbef9303325dddd58c096060e10dbafc1ad6c89644bbe7b0db75308904797"
          width={100}
          height={100}
          alt="image"
        ></Image>
        <h4 className="text-lg font-medium mt-4">Vivo</h4>
      </div>
      <div
        className={`shadow-md border flex items-center justify-center flex-col p-4 hover:text-[#ef1721] duration-500 hover:-translate-y-2 cursor-pointer`}
      >
        <Image
          src="https://img.freepik.com/free-vector/realistic-phones-different-views_52683-28436.jpg?w=900&t=st=1711355485~exp=1711356085~hmac=b3befa52b66e3c2ae4aa07842266eebc49843145fb6184a38b2f4c87d759a10a"
          width={100}
          height={100}
          alt="image"
        ></Image>
        <h4 className="text-lg font-medium mt-4">OnePlus</h4>
      </div>
      <div
        className={`shadow-md border flex items-center justify-center flex-col p-4 hover:text-[#ef1721] duration-500 hover:-translate-y-2 cursor-pointer`}
      >
        <Image
          src="https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437073.jpg?w=900&t=st=1711355445~exp=1711356045~hmac=b2361d06ebfc9d7c8b960f481c03df63462c67ca0b2ed55f1c2d2d99ecdee6d0"
          width={100}
          height={100}
          alt="image"
        ></Image>
        <h4 className="text-lg font-medium mt-4">Xiaomi</h4>
      </div>
    </div>
  );
};

export default BrandCard;
