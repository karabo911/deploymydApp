import { Injectable } from '@angular/core';
//import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(public _fire : AngularFirestore) { }

  //add users function 

  Adduser(data){
    return this._fire.collection('Users').add(data).then( results => {
      console.log(' successfully added user ')
    }).catch ( err => {
      console.log('Err occured :' , err)
    });
  }

  //get data from firestore

  GetUsers(){
    return this._fire.collection('Users');
  }

  //delete function
  deletePersons(ref){
    return this._fire.collection('Users').doc(ref).delete().then( results => {
      console.log('successfully deleted')
    }).catch( err => {
      console.log('error occured, ', err)
    })
  }
}
