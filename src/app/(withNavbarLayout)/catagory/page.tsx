import BrandCard from "@/components/UI/BrandCard";
import React from "react";

const CatagoryPage = async () => {
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
        <BrandCard></BrandCard>
      </div>
    </>
  );
};

export default CatagoryPage;
