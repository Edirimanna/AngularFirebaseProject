import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { Details } from '../models/constant';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ChatroomService } from '../shared/services/chatroom.service';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {

  list: Details[];
  detail: Details;
  userName: String;
  userImage: String;

  constructor(
    public authService: AuthService,
    private firestore :AngularFirestore,
    private service: ChatroomService
    ///


  ) {
    
    
   }

  ngOnInit(){
    ///////////////
    console.log("hello")
    console.log(this.authService.userData.email)
    this.userName= this.authService.userData.email;
    this.userImage= this.authService.userData.photoURL;
    this.resetForm();

    /////////////
  this.service.getAllMessage().subscribe(actionArray =>{
    this.list = actionArray.map(item =>{
      console.log(item)
      return {
        id: item.payload.doc.id,
        message: item.payload.doc.data()
        
       
      } as Details;
    })
   
   
  
  });
    
  
  }


////////////////////////////////////

  onSubmit(form: NgForm){


    let data = Object.assign({}, form.value);
    data.name=this.userName;
    data.userImage=this.userImage;
    this.firestore.collection('messages').add(data);
    this.resetForm(form)
    console.log(data)
  }

  /////////////////////////////////////////////////

  resetForm(form?: NgForm){
    if(form !=null)
    form.resetForm();
    this.detail = {
      message: '',
      id: null,
      name: '',
      userImage: ''
    }
  }
  ////delete record
  onDelete(id :String){
    console.log(id)
    this.firestore.doc('messages/'+ id).delete();

  }


}
