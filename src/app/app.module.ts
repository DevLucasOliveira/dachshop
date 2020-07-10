import { AuthGuard } from './services/auth.guard';
import { DataService } from './services/data.service';
import { MaskDirective } from './directives/mask.directive';
import { FramePageComponent } from './pages/master/frame.page';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule  } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ProductsPageComponent } from './pages/store/products-page/products-page.component';
import { CartPageComponent } from './pages/store/cart-page/cart-page.component';
import { ResetPasswordPageComponent } from './pages/account/reset-password-page/reset-password-page.component';
import { LoginPageComponent } from './pages/account/login-page/login-page.component';
import { ProductCardComponent } from './components/store/product-card/product-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { SignupPageComponent } from './pages/account/signup-page/signup-page.component';
import { ProfilePageComponent } from './pages/account/profile-page/profile-page.component';

@NgModule({
  declarations: [
    MaskDirective,
    AppComponent,
    NavbarComponent,
    LoginPageComponent,
    ResetPasswordPageComponent,
    LoginPageComponent,
    CartPageComponent,
    ProductsPageComponent,
    CartPageComponent,
    FramePageComponent,
    ProductCardComponent,
    LoadingComponent,
    SignupPageComponent,
    ProfilePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [DataService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
