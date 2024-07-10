import { createReducer, on } from '@ngrx/store';
import * as ProductActions from '../actions/product.actions';
import { initialProductsState } from '../state/product.state';

export const productReducer = createReducer(
  initialProductsState,
  on(ProductActions.loadProductsSuccess, (state, { products }) => ({
    ...state,
    products,
  })),
  on(ProductActions.loadProductsFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);
