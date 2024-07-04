import { Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: '/productos', pathMatch: 'full' },
  { path: 'productos', component: ProductListComponent, canActivate: [AuthGuard] },
  { path: 'carrito', component: CartComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent }
];


