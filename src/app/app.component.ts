import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {UserComponent} from './user/user.component';
import {DUMMY_USERS} from './dummy_users';
import {TaskComponent} from './task/task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  users= DUMMY_USERS;

  selectedUserId? :string;
   get selectedUser(){
     return this.users.find(user => user.id === this.selectedUserId)!;
   }
  onSelecteUser(id:string){
     this.selectedUserId = id;
  }
}
