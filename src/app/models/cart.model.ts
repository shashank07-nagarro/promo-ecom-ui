export interface Cart {
  id: number;
  title: string;
  description?: string;
  price: number;
  stock?: number;
  count: number;
  category: string;
  image: string;
}
