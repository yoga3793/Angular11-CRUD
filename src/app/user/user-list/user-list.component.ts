import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { User } from "../model/user";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[];
  constructor(private router: Router) { }

  ngOnInit() {
    let userjson = localStorage.getItem('userArray');
    if (userjson) {
      this.users = JSON.parse(userjson);
    }
    console.log(userjson);
  }

  // User Delete Popup calling Method
  deleteUser(userId) {
    localStorage.removeItem("deleteUserId");
    localStorage.setItem("deleteUserId", userId);
  }

  // User Delete Confirmation Method
  deleteConfirm() {
    debugger;
    let userId = parseInt(localStorage.getItem("deleteUserId"));
    var usersArray = this.users;
    let index = usersArray.findIndex(x => x.id == userId);
    usersArray.splice(index, 1);
    let json = usersArray;
    localStorage.setItem('userArray', JSON.stringify(json));
    localStorage.removeItem("deleteUserId");

  };

  // User Delete Cancel Method
  deleteCancel() {
    localStorage.removeItem("deleteUserId");
  }

  // User Edit Method
  editUser(userId) {
    localStorage.removeItem("editUserId");
    localStorage.setItem("editUserId", userId);
    this.router.navigate(['edit-user']);
  };

  // User Add Method
  addUser() {
    this.router.navigate(['add-user']);
  };
  // User Logout Method
  logout() {
    localStorage.setItem('isloggedIn', 'false');
    this.router.navigate(['/']);
    
  }
}
