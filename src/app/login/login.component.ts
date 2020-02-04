import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }


  form: any = {
    username: null,
    password: null
  };
  loginError: any = {
    username: "",
    password: ""
  }
  login() {

    if (this.form.username == null)
    this.loginError.username = "Please enter your email.";

    if(this.form.password == null)
    this.loginError.password = "Please enter your password.";

    if(this.form.password != null && this.form.username != null)
    this.router.navigateByUrl('/schedule');
    
  }

  ngOnInit() {
  }

}
