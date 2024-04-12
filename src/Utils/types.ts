// types.ts

interface Product {
  _id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  ratings: number;
  description: string;
  images: string[];
  flashSale: boolean;
  discount?: string; // Optional field since it might not always be present
  createdAt: string;
  brandImage?: string;
}

// interface Product {
//   _id: string;
//   name: string;
//   brand: string;
//   category: string;
//   price: number;
//   ratings: number;
//   description: string;
//   images: string[];
//   flashSale: boolean;
//   createdAt: string;
// }

export interface TopBrandData {
  brand: string;
  averageRating: number;
  products: Product[];
}

interface Props {
  brands: Product[];
}

export type { Product };
