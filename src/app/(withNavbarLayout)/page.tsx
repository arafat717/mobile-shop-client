/* eslint-disable react/no-unescaped-entities */
import Carousel from "@/components/Carousel/Carousel";
import React from "react";
import Link from "next/link";
import { Product, TopBrandData } from "@/Utils/types";
import TopBrands from "@/components/TopBrands/TopBrands";
import FlashSaleCard from "@/components/UI/FlashSaleCard";
import ProductCard from "@/components/UI/ProductCard";
import TopBrandCard from "@/components/UI/TopBrandCard";
import BrandCard from "@/components/UI/BrandCard";

const HomePage = async () => {
  const newBrand = await fetch(
    "http://localhost:5000/api/v1/allBrandsWithImagesAndProducts"
  );
  const NewBrands = await newBrand.json();

  const data = await fetch("http://localhost:5000/api/v1/flashsale", {
    next: {
      revalidate: 30,
    },
  });
  const flashSales = await data.json();

  const top = await fetch("http://localhost:5000/api/v1/topRatedProducts", {
    next: {
      revalidate: 30,
    },
  });
  const topproduct = await top.json();
  return (
    <div>
      <Carousel></Carousel>
      <div className="my-32">
        <div>
          <h1 className="px-24 mt-8 mb-2 text-2xl font-semibold">Flash Sale</h1>
          <p className="px-24 mt-2 mb-10 text-xl">
            Get ready to seize the moment with our Flash Sale! Limited-time
            offers on top-quality products await you. Don't miss out – shop now
            and save big before time runs out!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 py-8 px-10 lg:px-24 mx-auto">
            {flashSales?.slice(0, 6).map((product: Product) => (
              <FlashSaleCard key={product._id} product={product} />
            ))}
          </div>
        </div>
        <div className="text-center my-10">
          <Link href="/flashsale">
            <button className="bg-gray-900 text-white px-3 py-2 rounded-md hover:bg-gray-700 transition-colors duration-300 w-1/6">
              See All
            </button>
          </Link>
        </div>
      </div>
      <div className="text-center w-1/2 mx-auto">
        <h1 className="text-2xl font-semibold">Top Brands</h1>
        <p className="text-md mt-4 mb-9">
          Discover the epitome of excellence with our curated selection of top
          brands. From industry leaders to renowned innovators and
          sophistication.
        </p>
      </div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 py-8 px-10 lg:px-24 mx-auto">
          {NewBrands?.slice(0, 6).map((product: Product) => (
            <BrandCard key={product._id} product={product}></BrandCard>
          ))}
        </div>
      </div>
      <div className="text-center my-10">
        <Link href="/catagory">
          <button className="bg-gray-900 text-white px-3 py-2 rounded-md hover:bg-gray-700 transition-colors duration-300 w-1/6">
            See All
          </button>
        </Link>
      </div>
      <h1 className="px-24 mt-20 mb-2 text-2xl font-semibold">
        Trending Products
      </h1>
      <p className="px-24 mt-2 mb-5 text-xl">
        Get ready to seize the moment with our Flash Sale! Limited-time offers
        on top-quality products await you. Don't miss out – shop now and save
        big before time runs out!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 py-8 px-10 lg:px-24 mx-auto">
        {topproduct.slice(0, 6).map((product: Product) => (
          <TopBrandCard key={product._id} product={product}></TopBrandCard>
        ))}
      </div>
      <div className="text-center my-10">
        <Link href="/top-rated">
          <button className="bg-gray-900 text-white px-3 py-2 rounded-md hover:bg-gray-700 transition-colors duration-300 w-1/6">
            See All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
