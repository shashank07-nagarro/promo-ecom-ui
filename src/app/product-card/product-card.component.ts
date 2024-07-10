import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Cart } from '../models/cart.model';
import { addProduct } from '../store/actions/cart.actions';
import { Product } from '../models/product.model';
import { CartState } from '../store/state/cart.state';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input()
  product!: Product;
  addedToCart: boolean = false;

  constructor(private store: Store<{ cart: CartState }>) {}
  addProduct(item: Product) {
    this.store.dispatch(addProduct({ item }));
    this.addedToCart = true;
  }
}
