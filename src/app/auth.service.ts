import { Injectable } from '@angular/core';

import { AngularFireAuth } from "@angular/fire/auth";
import { firebase } from '@firebase/app';
import { auth } from 'firebase';
import { Router } from "@angular/router";



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public routers: Router
  ) { }

  // Sign in with Facebook
  FacebookAuth() {
    console.log("line-1")
    return this.AuthLogin(new auth.FacebookAuthProvider());
  }  

  // Auth logic to run auth providers
  AuthLogin(provider) {
    
    console.log("line-2")
    return this.afAuth.signInWithPopup(provider)
    .then((result) => {

        this.routers.navigate(['home']);
        console.log('You have been successfully logged in!')
    }).catch((error) => {
        console.log(error)
    })
  }

 /* doFacebookAuth(){
    
    console.log("line-1");
    return new Promise((resolve, reject) => {
      let provider = new firebase.auth.FacebookAuthProvider();
      this.afAuth
      .signInWithPopup(provider)
      .then(res => {
        resolve(res);
      }, err => {
        console.log(err);
        reject(err);
      })
    })
 }*/

}
