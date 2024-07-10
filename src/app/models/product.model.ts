export interface Product {
  id: number;
  title: string;
  description?: string;
  price: number;
  stock?: number;
  category: string;
  image: string;
  rating?: {
    rate: number;
    count: number;
  };
}
