import { Routes } from '@angular/router';
import { SigninComponent } from './app/signin/signin.component';
import { HomeComponent } from './app/home/home.component';
import { SignInComponent } from './app/components/sign-in/sign-in.component';
import { SignUpComponent } from './app/components/sign-up/sign-up.component';
import { DashboardComponent } from './app/components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './app/components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './app/components/verify-email/verify-email.component';
import { ChatroomComponent } from './app/chatroom/chatroom.component';
import { UserprofileComponent } from './app/userprofile/userprofile.component';

export const routes: Routes = [
   // { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
   // { path: 'sign-in' ,component: SigninComponent}, 
   // { path: 'home' ,component: HomeComponent}
   { path: '', redirectTo: '/welcome', pathMatch: 'full' },
   { path: 'welcome', component: HomeComponent},
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'dashboard',
    component: DashboardComponent ,

    children :[
       {
          path: '',
          redirectTo: 'user-profile',
          pathMatch: 'full'
       },
       {
          path: 'chat',
          component: ChatroomComponent
       },
       {
         path: 'user-profile',
         component: UserprofileComponent
      },

    ]
   },

  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent }

   
  ];