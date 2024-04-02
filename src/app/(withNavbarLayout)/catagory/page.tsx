import { Product } from "@/Utils/types";
import BrandCard from "@/components/UI/BrandCard";
import React from "react";

const CatagoryPage = async () => {
  const newBrand = await fetch(
    "http://localhost:5000/api/v1/allBrandsWithImagesAndProducts"
  );
  const NewBrands = await newBrand.json();
  return (
    <>
      <div className="text-center w-1/2 mt-10 mx-auto">
        <h1 className="text-2xl font-semibold">Top Brands</h1>
        <p className="text-md mt-4 mb-9">
          Discover the epitome of excellence with our curated selection of top
          brands. From industry leaders to renowned innovators and
          sophistication.
        </p>
      </div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 py-8 px-10 lg:px-24 mx-auto">
          {NewBrands?.map((product: Product) => (
            <BrandCard key={product.brand} product={product}></BrandCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default CatagoryPage;
