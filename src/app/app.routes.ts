import { Routes } from '@angular/router';
import { CardcomponentComponent } from './components/card/cardcomponent/cardcomponent.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path:'homePage',component:HomeComponent},
    {path: ':category', component:CardcomponentComponent},
    {path:'**',redirectTo:''}
];
