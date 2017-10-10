import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StarRatingModule } from 'angular-star-rating';

import { beerRoutes } from './routes/beer-routing';

import { BeerService } from './services/beer-service.service';
import { OrderService } from './services/order-service.service';
import { SessionService } from './services/session-service.service';
import { RequireAuthService } from './guards/auth-service.service';

import { AppComponent } from './app.component';
import { BeerBuilderPageComponent } from './pages/beer-builder-page/beer-builder.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ConfirmOrderPageComponent } from './pages/confirm-order-page/confirm-order-page.component';
import { PaymentManagementPageComponent } from './pages/payment-management-page/payment-management-page.component';

import { BeerImageComponent } from './pages/reusables/beer-image/beer-image.component';
import { BeerDesignFormComponent } from './pages/beer-builder-page/components/beer-design-form/beer-design-form.component';
import { BeerOrderFormComponent } from './pages/confirm-order-page/components/beer-order-form/beer-order-form.component';
import { AuthenticationPageComponent } from './pages/authentication-page/authentication-page.component';
import { LoginFormComponent } from './pages/authentication-page/components/login-form/login-form.component';
import { SignupFormComponent } from './pages/authentication-page/components/signup-form/signup-form.component';
import { BeerDisplayFrameComponent } from './pages/reusables/beer-display-frame/beer-display-frame.component';

import { AuthComponentComponent } from './pages/reusables/auth-component/auth-component.component';
import { AuthLogoutComponent } from './pages/reusables/auth-logout/auth-logout.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';

import { FBShareComponent } from 'ngx-facebook';
import { BeerEditorPageComponent } from './pages/beer-editor-page/beer-editor-page.component';
import { BeerEditorFormComponent } from './pages/beer-editor-page/components/beer-editor-form/beer-editor-form.component';
import { BeerDisplayComponent } from './pages/home-page/components/beer-display/beer-display.component';

import { LeaveReviewComponent } from './pages/reusables/leave-review/leave-review.component';
import { DisplayReviewComponent } from './pages/reusables/display-review/display-review.component';
import { OrderHistoryPageComponent } from './pages/order-history-page/order-history-page.component';
import { BasketPageComponent } from './pages/basket-page/basket-page.component';
import { QuantitySetterComponent } from './pages/reusables/quantity-setter/quantity-setter.component';
import { PaymentOptionsPageComponent } from './pages/payment-options-page/payment-options-page.component';
import { OrderResultsPageComponent } from './pages/order-results-page/order-results-page.component';
import { OrderDisplayComponent } from './pages/reusables/order-display/order-display.component';
import { ChooseMethodComponent } from './pages/payment-options-page/components/choose-method/choose-method.component';
import { RecommenderComponent } from './pages/reusables/recommender/recommender.component';
import { RecommendationEnginePageComponent } from './pages/recommendation-engine-page/recommendation-engine-page.component';
// tslint:disable-next-line:max-line-length
import { RecommendationEngineComponent } from './pages/recommendation-engine-page/components/recommendation-engine/recommendation-engine.component';

@NgModule({
  declarations: [
    AppComponent,
    BeerBuilderPageComponent,
    HomePageComponent,
    ConfirmOrderPageComponent,
    PaymentManagementPageComponent,
    BeerImageComponent,
    BeerDesignFormComponent,
    BeerOrderFormComponent,
    AuthenticationPageComponent,
    LoginFormComponent,
    SignupFormComponent,
    BeerDisplayFrameComponent,
    AuthComponentComponent,
    AuthLogoutComponent,
    ProfilePageComponent,
    FBShareComponent,
    BeerEditorPageComponent,
    BeerEditorFormComponent,
    BeerDisplayComponent,
    LeaveReviewComponent,
    DisplayReviewComponent,
    OrderHistoryPageComponent,
    BasketPageComponent,
    QuantitySetterComponent,
    PaymentOptionsPageComponent,
    OrderResultsPageComponent,
    OrderDisplayComponent,
    ChooseMethodComponent,
    RecommenderComponent,
    RecommendationEnginePageComponent,
    RecommendationEngineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(beerRoutes),
    StarRatingModule.forRoot()
  ],
  providers: [BeerService,
              OrderService,
              SessionService,
              RequireAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
