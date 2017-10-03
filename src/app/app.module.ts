import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { beerRoutes } from './routes/beer-routing';

import { BeerService } from './services/beer-service.service';
import { OrderService } from './services/order-service.service';
import { SessionService } from './services/session-service.service';

import { AppComponent } from './app.component';
import { BeerBuilderPageComponent } from './pages/beer-builder-page/beer-builder.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ConfirmOrderPageComponent } from './pages/confirm-order-page/confirm-order-page.component';
import { PaymentManagementPageComponent } from './pages/payment-management-page/payment-management-page.component';
import { OrderSuccessPageComponent } from './pages/order-success-page/order-success-page.component';

import { BeerImageComponent } from './pages/reusables/beer-image/beer-image.component';
import { BeerDesignFormComponent } from './pages/beer-builder-page/components/beer-design-form/beer-design-form.component';
import { BeerOrderFormComponent } from './pages/confirm-order-page/components/beer-order-form/beer-order-form.component';
import { AuthenticationPageComponent } from './pages/authentication-page/authentication-page.component';
import { LoginFormComponent } from './pages/authentication-page/components/login-form/login-form.component';
import { SignupFormComponent } from './pages/authentication-page/components/signup-form/signup-form.component';
import { BeerCreationProcessComponent } from './pages/beer-creation-process/beer-creation-process.component';

@NgModule({
  declarations: [
    AppComponent,
    BeerBuilderPageComponent,
    HomePageComponent,
    ConfirmOrderPageComponent,
    PaymentManagementPageComponent,
    OrderSuccessPageComponent,
    BeerImageComponent,
    BeerDesignFormComponent,
    BeerOrderFormComponent,
    AuthenticationPageComponent,
    LoginFormComponent,
    SignupFormComponent,
    BeerCreationProcessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(beerRoutes),
  ],
  providers: [BeerService, OrderService, SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
