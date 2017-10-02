import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { beerRoutes } from './routes/beer-routing';

import { BeerService } from './services/beer-service.service';

import { AppComponent } from './app.component';
import { BeerBuilderPageComponent } from './pages/beer-builder-page/beer-builder.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DesignLabelPageComponent } from './pages/design-label-page/design-label-page.component';
import { ConfirmOrderPageComponent } from './pages/confirm-order-page/confirm-order-page.component';
import { PaymentManagementPageComponent } from './pages/payment-management-page/payment-management-page.component';
import { OrderSucccessPageComponent } from './pages/order-succcess-page/order-succcess-page.component';
import { BeerImageComponent } from './pages/beer-builder-page/components/beer-image/beer-image.component';
import { BeerDesignFormComponent } from './pages/beer-builder-page/components/beer-design-form/beer-design-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BeerBuilderPageComponent,
    HomePageComponent,
    DesignLabelPageComponent,
    ConfirmOrderPageComponent,
    PaymentManagementPageComponent,
    OrderSucccessPageComponent,
    BeerImageComponent,
    BeerDesignFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(beerRoutes),
  ],
  providers: [BeerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
