import { ProfilePageComponent } from './pages/account/profile-page/profile-page.component';
import { AuthGuard } from './services/auth.guard';
import { ResetPasswordPageComponent } from './pages/account/reset-password-page/reset-password-page.component';
import { SignupPageComponent } from './pages/account/signup-page/signup-page.component';
import { PetsPageComponent } from './pages/account/pets-page/pets-page.component';
import { CartPageComponent } from './pages/store/cart-page/cart-page.component';
import { ProductsPageComponent } from './pages/store/products-page/products-page.component';
import { LoginPageComponent } from './pages/account/login-page/login-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { FramePageComponent } from './pages/master/frame.page';


const routes: Routes = [
  {
    path: '',
    component: FramePageComponent,
    children: [
      { path: '', component: ProductsPageComponent },
      { path: 'cart', component: CartPageComponent, canActivate: [AuthGuard] },
      // { path: 'checkout', component: Checkout}
    ]
  },
  {
    path: 'account',
    component: FramePageComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: ProfilePageComponent },
      { path: 'pets', component: PetsPageComponent }
    ]
  },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'reset-password', component: ResetPasswordPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
