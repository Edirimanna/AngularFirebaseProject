import { Injectable } from '@angular/core';
import { Details } from 'src/app/models/constant';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ChatroomService {

  detail: Details;
  constructor( 
    private firestor : AngularFirestore
  ) { }

  getAllMessage(){
    
    return this.firestor.collection('messages').snapshotChanges();

  }
}
