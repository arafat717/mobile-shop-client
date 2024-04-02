import ProductTable from "@/components/UI/ProductTable";
import React from "react";

const AllProductPage = async () => {
  const res = await fetch("http://localhost:5000/api/v1/products");
  const products = await res.json();

  return (
    <>
      <div className="px-10 py-5">
        <ProductTable key={products._id} products={products} />
      </div>
    </>
  );
};

export default AllProductPage;
