import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router) { }

  userForm: FormGroup;
  userMainArray = [];
  submitted: boolean = false;
  invalidUser: boolean = false;

  ngOnInit() {
    this.createForm();
  }

  // User Record Adding Method
  onSubmit(userForm) {

    this.submitted = true;
    if (this.userForm.invalid) {
      return;
    }
    let val = userForm.value
    val.userName = val.firstName + ' ' + val.lastName;
    val.id = new Date().getTime();
    let mainUserJson = localStorage.getItem('userArray');
    if (mainUserJson) {
      let mainUserArray = JSON.parse(mainUserJson);
      this.userMainArray = mainUserArray;
    }
    this.userMainArray.push(val);
    let json = this.userMainArray
    localStorage.setItem('userArray', JSON.stringify(json));
    this.router.navigate(['list-user']);

  }

  // User Record Add Cancel Method
  cancel() {
    this.router.navigate(['list-user']);
  }

  // User Form Initializing Method
  createForm() {
    this.userForm = this.fb.group({
      id: [],
      userName: [],
      email: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20)
      ])]
    });
  }
}
