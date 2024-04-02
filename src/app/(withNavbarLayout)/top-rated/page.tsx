import { Product } from "@/Utils/types";
import TopBrandCard from "@/components/UI/TopBrandCard";
import React from "react";

const topRatedProducts = async () => {
  const top = await fetch("http://localhost:5000/api/v1/topRatedProducts", {
    next: {
      revalidate: 30,
    },
  });
  const topproduct = await top.json();
  return (
    <div>
      <h1 className="px-24 mt-20 mb-2 text-2xl font-semibold">
        Trending Products
      </h1>
      <p className="px-24 mt-2 mb-5 text-xl">
        Get ready to seize the moment with our Flash Sale! Limited-time offers
        on top-quality products await you. Dont miss out shop now and save big
        before time runs out!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 py-8 px-10 lg:px-24 mx-auto">
        {topproduct.slice(0, 21).map((product: Product) => (
          <TopBrandCard key={product._id} product={product}></TopBrandCard>
        ))}
      </div>
    </div>
  );
};

export default topRatedProducts;
