import { Routes } from '@angular/router';

import { HomePageComponent } from '../pages/home-page/home-page.component';
import { AuthenticationPageComponent } from '../pages/authentication-page/authentication-page.component';
import { BeerDisplayFrameComponent } from '../pages/reusables/beer-display-frame/beer-display-frame.component';
import { BeerBuilderPageComponent } from '../pages/beer-builder-page/beer-builder.component';
import { ProfilePageComponent } from '../pages/profile-page/profile-page.component';
import { BeerEditorPageComponent } from '../pages/beer-editor-page/beer-editor-page.component';
import { OrderHistoryPageComponent } from '../pages/order-history-page/order-history-page.component';
import { BasketPageComponent } from '../pages/basket-page/basket-page.component';
import { PaymentManagementPageComponent } from '../pages/payment-management-page/payment-management-page.component';

export const beerRoutes: Routes  = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: AuthenticationPageComponent },
  { path: 'create', component: BeerBuilderPageComponent },
  { path: 'profile/:id', component: ProfilePageComponent },
  { path: 'beer/:id', component: BeerDisplayFrameComponent },
  { path: 'beer/:id/edit', component: BeerEditorPageComponent },
  { path: 'orders', component: OrderHistoryPageComponent },
  { path: 'basket', component: BasketPageComponent },
  { path: 'checkout', component: PaymentManagementPageComponent }

];
