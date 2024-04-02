import { Product } from "@/Utils/types";
import Image from "next/image";
import Link from "next/link";

const TopBrandCard = ({ product }: { product: Product }) => {
  return (
    <Link href={`/products/${product._id}`}>
      <div className="max-w-xs cursor-pointer bg-white shadow-lg rounded-lg overflow-hidden m-4 hover:shadow-xl hover:scale-105 transition duration-300">
        <div className="relative h-52">
          <Image
            src={product.images?.[0] || ""}
            alt={product.name || ""}
            layout="fill"
            objectFit="cover"
            key={product._id || ""}
          />
        </div>
        <div className="p-4">
          <h2 className="text-gray-900 font-semibold text-lg">
            {product.name || "Unknown Product"}
          </h2>
          <p className="mt-2 text-gray-600 text-sm">
            {product.description || "No description available"}
          </p>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-gray-700 font-bold">
              ${product.price?.toFixed(2) || "N/A"}
            </span>
            {product.flashSale && (
              <span className="text-green-500 text-sm">
                Flash Sale - {product.discount || "0"}% off
              </span>
            )}
          </div>
          <div className="mt-2 flex items-center justify-between">
            <span className="text-gray-700">
              Rating: {product.ratings?.toFixed(1) || "N/A"}
            </span>
            <span className="text-gray-500 text-xs">
              {product.createdAt || "Unknown Date"}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TopBrandCard;
