import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { ProductService } from '../services/product.service';
import { Cart } from '../models/cart.model';
import { addProduct } from '../store/actions/cart.actions';
import { Store } from '@ngrx/store';
import { CartState } from '../store/state/cart.state';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
  product$: Observable<any>;
  addedToCart: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private store: Store<{ cart: CartState }>
  ) {
    this.product$ = this.route.paramMap.pipe(
      switchMap((params) => {
        let id = params.get('id');
        return this.productService.getProductById(id ? +id : null);
      })
    );
  }

  addProduct(item: Product) {
    this.store.dispatch(addProduct({ item }));
    this.addedToCart = true;
  }
}
