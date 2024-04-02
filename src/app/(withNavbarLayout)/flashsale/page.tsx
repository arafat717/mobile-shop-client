/* eslint-disable react/no-unescaped-entities */
import { Product } from "@/Utils/types";
import FlashSaleCard from "@/components/UI/FlashSaleCard";
import React from "react";

const FlashSale = async () => {
  const res = await fetch("http://localhost:5000/api/v1/flashsale", {
    next: {
      revalidate: 30,
    },
  });
  const flashSales = await res.json();
  return (
    <div>
      <h1 className="px-24 mt-8 mb-2 text-2xl font-semibold">Flash Sale</h1>
      <p className="px-24 mt-2 mb-10 text-xl">
        Get ready to seize the moment with our Flash Sale! Limited-time offers
        on top-quality products await you. Don't miss out – shop now and save
        big before time runs out!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 py-8 px-10 lg:px-24 mx-auto">
        {flashSales?.map((product: Product) => (
          <FlashSaleCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FlashSale;
