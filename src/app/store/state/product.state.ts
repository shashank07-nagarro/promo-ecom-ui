// cart.state.ts
import { Product } from '../../models/product.model';

export interface ProductState {
  products: Product[];
}

export const initialProductsState: ProductState = {
  products: [],
};
