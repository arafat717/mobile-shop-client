import { Product } from "@/Utils/types";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="relative bg-white shadow-md rounded-md overflow-hidden transition-transform hover:transform hover:-translate-y-1">
      <div className="relative h-40">
        <Image
          src={product.images[1]}
          alt={product.name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4 flex flex-col justify-between h-full">
        <div>
          <h2 className="text-xl font-bold mb-2">{product.name}</h2>
          <p className="text-gray-600 mb-4">
            {product.description.slice(0, 45)}
          </p>
          <div className="flex justify-between items-center mb-2">
            <p className="text-lg font-semibold">${product.price}</p>
            {product.flashSale && (
              <span className="text-red-600 font-semibold">
                {product.discount && `${product.discount}`} Flash Sale
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="py-4">
        <Link href={`/products/${product._id}`}>
          <button className="absolute bottom-2 left-auto right-auto mx-auto bg-gray-900 text-white px-3 py-2 rounded-md hover:bg-gray-700 transition-colors duration-300 w-full">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
