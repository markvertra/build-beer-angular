import { Routes } from '@angular/router';

import { HomePageComponent } from '../pages/home-page/home-page.component';
import { BeerCreationProcessComponent } from '../pages/beer-creation-process/beer-creation-process.component';
import { OrderSuccessPageComponent } from '../pages/order-success-page/order-success-page.component';
import { AuthenticationPageComponent } from '../pages/authentication-page/authentication-page.component';
import { BeerDisplayFrameComponent } from '../pages/reusables/beer-display-frame/beer-display-frame.component';

export const beerRoutes: Routes  = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: AuthenticationPageComponent },
  { path: 'create', component: BeerCreationProcessComponent },
  { path: 'success', component: OrderSuccessPageComponent },
  { path: 'beer/:id', component: BeerDisplayFrameComponent }
];
