import { Routes } from '@angular/router';
import { CardcomponentComponent } from './components/card/cardcomponent/cardcomponent.component';
import { HomeComponent } from './components/home/home.component';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path:'homePage',component:HomeComponent},
    {path: 'addToCart', component: AddToCartComponent},
    {path: 'shoppingCart', component:ShoppingCartComponent},
    {path: ':category', component:CardcomponentComponent},

    {path:'**',redirectTo:''}
];
