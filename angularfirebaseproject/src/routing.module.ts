import { Routes } from '@angular/router';
import { SigninComponent } from './app/signin/signin.component';
import { HomeComponent } from './app/home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
    { path: 'sign-in' ,component: SigninComponent},
    
    { path: 'home' ,component: HomeComponent}

   
  ];