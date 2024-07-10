import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { ProductState } from '../store/state/product.state';
import { Store } from '@ngrx/store';
import { selectProductList } from '../store/selectors/product.selector';
import { loadProducts } from '../store/actions/product.actions';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  items$: Observable<Product[]>;
  @Input() filterData: any;

  constructor(private store: Store<{ cart: ProductState }>) {
    store.dispatch(loadProducts());
    this.items$ = store.select(selectProductList);
  }
}
