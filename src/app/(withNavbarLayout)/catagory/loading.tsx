import { Product } from "@/Utils/types";
import Loading from "@/components/UI/Loading";
import React from "react";

const loading = async () => {
  const res = await fetch("http://localhost:5000/api/v1/products");
  const products = await res.json();

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-8 px-10 lg:px-24 mx-auto">
        {products.map((product: Product) => (
          <Loading key={product._id} product={product} />
        ))}
      </div>
    </>
  );
};
export default loading;
