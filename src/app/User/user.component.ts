import { Component } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  users: User[] = [
    new User('John Doe', 'john.doe@example.com'),
    new User('Jane Doe', 'jane.doe@example.com')
  ];

  newUser: User = new User('', '');

  addUser() {
    this.users.push(new User(this.newUser.name, this.newUser.email));
    this.newUser = new User('', '');
  }
}
