import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;
  constructor(private formBuilder: FormBuilder, private router: Router) { }



  ngOnInit() {
    this.fakeDataInject();
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // Login submit Method
  onSubmit() {

    debugger;
    this.submitted = true;
    if (this.loginForm.invalid) {
      localStorage.setItem('isloggedIn', 'false');
      return;
    }

    let loginDetail = this.loginForm.value
    let mainUserJson = localStorage.getItem('userArray');
    let user ;

    if (mainUserJson) {
      let mainUserArray = JSON.parse(mainUserJson);
      user = mainUserArray.find(x => x.email.toLowerCase() == loginDetail.email.toLowerCase() && x.password == loginDetail.password);      
    } 

    if (user) {
      this.router.navigate(['list-user']);
      localStorage.setItem('isloggedIn', 'true');
    } else {
      this.invalidLogin = true;
      localStorage.setItem('isloggedIn', 'false');
    }

  }


  // Injecting Sample Data Method
  fakeDataInject() {
    var fakeData = [
      {
        "id": 1610787421968,
        "userName": "Admin User",
        "email": "Admin@gmail.com",
        "firstName": "Admin",
        "lastName": "User",
        "phone": "9876543210",
        "password": "Admin@123"
      },
      {
        "id": 1610787421970,
        "userName": "Yoga1 Nanthan",
        "email": "Yoga1@yopmail.com",
        "firstName": "Yoga1",
        "lastName": "Nanthan",
        "phone": "987541366",
        "password": "Admin@123."
      },
      {
        "id": 1610787421972,
        "userName": "Yoga2 Nanthan",
        "email": "Yoga2@yopmail.com",
        "firstName": "Yoga2",
        "lastName": "Nanthan",
        "phone": "987541366",
        "password": "Admin@123."
      },
      {
        "id": 1610787421973,
        "userName": "Yoga3 Nanthan",
        "email": "Yoga3@yopmail.com",
        "firstName": "Yoga3",
        "lastName": "Nanthan",
        "phone": "987541366",
        "password": "Admin@123."
      },
      {
        "id": 1610787421975,
        "userName": "Yoga4 Nanthan",
        "email": "Yoga4@yopmail.com",
        "firstName": "Yoga4",
        "lastName": "Nanthan",
        "phone": "987541366",
        "password": "Admin@123."
      },
      {
        "id": 1610787421980,
        "userName": "Yoga Nanthan",
        "email": "Yoga@yopmail.com",
        "firstName": "Yoga",
        "lastName": "Nanthan",
        "phone": "9876543210",
        "password": "Admin@123."
      },

    ];
    localStorage.setItem('userArray', JSON.stringify(fakeData));
  }

}
