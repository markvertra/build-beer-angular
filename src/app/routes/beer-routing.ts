import { Routes } from '@angular/router';

import { HomePageComponent } from '../pages/home-page/home-page.component';
import { BeerBuilderPageComponent } from '../pages/beer-builder-page/beer-builder.component';
import { ConfirmOrderPageComponent } from '../pages/confirm-order-page/confirm-order-page.component';
import { OrderSuccessPageComponent } from '../pages/order-success-page/order-success-page.component';
import { AuthenticationPageComponent } from '../pages/authentication-page/authentication-page.component';

export const beerRoutes: Routes  = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: AuthenticationPageComponent },
  { path: 'create', component: BeerBuilderPageComponent },
  { path: 'confirm', component: ConfirmOrderPageComponent },
  { path: 'success', component: OrderSuccessPageComponent }
];
