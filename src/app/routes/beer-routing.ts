import { Routes } from '@angular/router';

import { HomePageComponent } from '../pages/home-page/home-page.component';
import { BeerBuilderPageComponent } from '../pages/beer-builder-page/beer-builder.component';

export const beerRoutes: Routes  = [
  { path: '', component: HomePageComponent },
  { path: 'create', component: BeerBuilderPageComponent }
];
