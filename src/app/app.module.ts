import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms' 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
//import { AuthService } from './auth.service';

import { AngularFireAuthModule } from "@angular/fire/auth";

import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';

import {  RouterModule } from '@angular/router';
import { routes } from 'src/routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AuthService } from './shared/services/auth.service';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { ChatroomService } from './shared/services/chatroom.service';




@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    HomeComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    ChatroomComponent,
    UserprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireAuthModule,
    RouterModule.forRoot(routes),
    
  AngularFireModule.initializeApp(environment.  firebaseConfig),
  AngularFirestoreModule
    
  ],
  providers: [AuthService, ChatroomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
