import { Component } from '@angular/core';

import { NgForm } from '@angular/forms'
import { DatabaseService } from './services/database.service';
import { Usersdata } from './services/users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'database1';
  persons : any;

  constructor(public _data : DatabaseService){}

  AddUsers(UserData : NgForm){
    //add this to our database

    this._data.Adduser(UserData.value);
  }

  //delete user
  deleteUser(ref){
    this._data.deletePersons(ref);
  }


  ngOnInit(){

    this._data.GetUsers().snapshotChanges().subscribe( action =>{
      console.log(action);
      this.persons = action;

      //action.map( element => {
       // const Usersinfo = element as Usersdata

       // console.log(Usersinfo.name)

      })

      //if(this.persons.name == "karabo"){
       // console.log('is available');
     // }
  //  })

    //display data
  }
}
