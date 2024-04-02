"use client";

import { Product } from "@/Utils/types";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const FlashSaleCard = ({ product }: { product: Product }) => {
  const [minutesRemaining, setMinutesRemaining] = useState<number>(0);

  useEffect(() => {
    if (product.flashSale) {
      const endTime = new Date(product.createdAt).getTime() + 30 * 60 * 1000; // Assuming flash sale lasts for 30 minutes
      const interval = setInterval(() => {
        const now = new Date().getTime();
        const difference = endTime - now;
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        setMinutesRemaining(minutes);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [product.flashSale, product.createdAt]);
  return (
    <div className="relative bg-white shadow-md rounded-md overflow-hidden transition-transform hover:transform hover:-translate-y-1">
      <div className="relative h-40">
        <Image
          src={product.images[0]}
          alt={product.name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4 flex flex-col justify-between h-full">
        <div>
          <h2 className="text-xl font-bold mb-2">{product.name}</h2>
          <p className="text-gray-600 mb-4">
            {/* Truncate long descriptions */}
            {product.description.length > 45
              ? `${product.description.slice(0, 45)}...`
              : product.description}
          </p>
          <div className="flex justify-between items-center mb-2">
            <p className="text-lg font-semibold">${product.price}</p>
            {product.flashSale && (
              <span className="text-red-600 font-semibold">
                {/* Add aria-label for accessibility */}
                <span aria-label="Flash Sale">Flash Sale</span>
                {product.discount && ` - ${product.discount}`}
                {/* Show remaining time in minutes */}
                <div>{` (${minutesRemaining} mins left)`}</div>
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="py-4">
        {/* Add aria-label for accessibility */}
        <Link href={`products/${product._id}`}>
          <button
            aria-label={`View Details of ${product.name}`}
            className="absolute bottom-2 left-auto right-auto mx-auto bg-gray-900 text-white px-3 py-2 rounded-md hover:bg-gray-700 transition-colors duration-300 w-full"
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FlashSaleCard;
