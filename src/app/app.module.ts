import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ProductListComponent } from './product-list/product-list.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { loadState } from './local-storage';
import { reducers } from './store/reducers';
import { metaReducers } from './meta-reducers';
import { ProductEffects } from './store/effects/product.effects';
import {
  provideHttpClient,
  withFetch,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { TopNavComponent } from './layout/top-nav/top-nav.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FilteredListComponent } from './filtered-list/filtered-list.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import { ToastComponent } from './shared/toast/toast.component';
import { RatingComponent } from './shared/rating/rating.component';

const isBrowser =
  typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
const initialState = isBrowser ? loadState('ngrx-state') : undefined;

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ProductListComponent,
    HomeComponent,
    ProductCardComponent,
    TopNavComponent,
    HeaderComponent,
    FooterComponent,
    ProductDetailComponent,
    FilteredListComponent,
    BreadcrumbComponent,
    ToastComponent,
    RatingComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, { metaReducers, initialState }),
    EffectsModule.forRoot([ProductEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    AppRoutingModule,
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withInterceptorsFromDi(), withFetch()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
