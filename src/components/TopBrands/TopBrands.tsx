import { Product } from "@/Utils/types";
import React from "react";
import TopBrandCard from "../UI/TopBrandCard";

const TopBrands = ({ brands }: { brands: Product[] }) => {
  return (
    <div>
      {brands.map((product) => (
        <TopBrandCard key={product._id} product={product}></TopBrandCard>
      ))}
    </div>
  );
};

export default TopBrands;
