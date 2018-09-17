import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ContentPage
import { HomePageModule } from './home-page/home-page.module';
import { PageNotFoundModule } from './404/404.module';
import { CartPageModule } from './cart-page/cart-page.module';
import { OrderConfirmationPageModule } from './order-confirmation-page/order-confirmation-page.module';
import { MultiStepCheckoutPageModule } from './multi-step-checkout-page/multi-step-checkout-page.module';
import { RegisterPageModule } from './register-page/register-page.module';
import { LoginPageModule } from './login-page/login-page.module';
import { ResetPasswordPageModule } from './reset-password-page/reset-password-page.module';
import { StoreFinderPageModule } from './store-finder-page/store-finder-page.module';
import { PaymentManagementPageModule } from './payment-management-page/payment-management-page.module';
import { ResetNewPasswordPageModule } from './reset-new-password-page/reset-new-password-page.module';

// ContentPage: my Account Pages
import { OrderHistoryPageModule } from './order-history-page/order-history-page.module';
import { OrderDetailsPageModule } from './order-details-page/order-details-page.module';

// CategoryPage
import { CategoryPageModule } from './category-page/category-page.module';

// ProductPage
import { ProductPageModule } from './product-page/product-page.module';

@NgModule({
  imports: [
    CommonModule,

    OrderHistoryPageModule,
    HomePageModule,
    CategoryPageModule,
    CartPageModule,
    MultiStepCheckoutPageModule,
    OrderDetailsPageModule,
    OrderConfirmationPageModule,
    ProductPageModule,
    RegisterPageModule,
    LoginPageModule,
    ResetPasswordPageModule,
    StoreFinderPageModule,
    PaymentManagementPageModule,
    ResetNewPasswordPageModule,
    // new pages should be added above this line
    PageNotFoundModule
  ],
  declarations: [],
  exports: [
    OrderHistoryPageModule,
    HomePageModule,
    CategoryPageModule,
    CartPageModule,
    MultiStepCheckoutPageModule,
    OrderDetailsPageModule,
    OrderConfirmationPageModule,
    ProductPageModule,
    RegisterPageModule,
    LoginPageModule,
    ResetPasswordPageModule,
    StoreFinderPageModule,
<<<<<<< HEAD
    PaymentManagementPageModule,
=======
    ResetNewPasswordPageModule,
>>>>>>> 4e123697eb783e319d7de4232d2d3d4d29a94cfc
    // new pages should be added above this line
    PageNotFoundModule
  ]
})
export class PagesModule {}
