// cart.component.ts
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartState } from '../store/state/cart.state';
import {
  addProduct,
  removeProduct,
  clearCart,
  decreaseProduct,
} from '../store/actions/cart.actions';
import {
  selectCartData,
  selectCartTatalItemCount,
  selectCartTatalPrice,
} from '../store/selectors/cart.selector';
import { Cart } from '../models/cart.model';
import { Product } from '../models/product.model';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  items$: Observable<Cart[]>;
  selectCartTatalItemCount$: Observable<number>;
  selectCartTatalPrice$: Observable<number>;
  shippingCharge: number = 5;

  constructor(
    private store: Store<{ cart: CartState }>,
    public util: UtilityService
  ) {
    this.items$ = store.select(selectCartData);
    this.selectCartTatalItemCount$ = store.select(selectCartTatalItemCount);
    this.selectCartTatalPrice$ = store.select(selectCartTatalPrice);
  }

  addProduct(item: Product) {
    this.store.dispatch(addProduct({ item }));
  }

  decreaseProduct(itemId: number) {
    this.store.dispatch(decreaseProduct({ itemId }));
  }

  removeProduct(itemId: number) {
    this.store.dispatch(removeProduct({ itemId }));
  }

  clearCart() {
    this.store.dispatch(clearCart());
  }
}
