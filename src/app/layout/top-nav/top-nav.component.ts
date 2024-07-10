import { Component } from '@angular/core';
import { ProductState } from '../../store/state/product.state';
import { Store } from '@ngrx/store';
import { selectCartTatalItemCount } from '../../store/selectors/cart.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.scss',
})
export class TopNavComponent {
  selectCartTatalItemCount$: Observable<number>;

  constructor(private store: Store<{ cart: ProductState }>) {
    this.selectCartTatalItemCount$ = store.select(selectCartTatalItemCount);
  }
}
