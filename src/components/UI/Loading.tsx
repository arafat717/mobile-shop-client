import { Product } from "@/Utils/types";

const Loading = ({ product }: { product: Product }) => {
  return (
    <div className="relative bg-white shadow-lg border rounded-md overflow-hidden transition-transform hover:transform hover:-translate-y-1">
      <div className="relative h-40"></div>
      <div className="p-4 flex flex-col justify-between h-full">
        <div>
          <h2 className="text-xl font-bold mb-2"></h2>
          <p className="text-gray-600 mb-4"></p>
          <div className="flex justify-between items-center mb-2">
            <p className="text-lg font-semibold"></p>
          </div>
        </div>
      </div>
      <div className="py-4"></div>
    </div>
  );
};

export default Loading;
