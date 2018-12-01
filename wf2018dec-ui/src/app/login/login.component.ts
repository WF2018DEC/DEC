import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'sgbp-app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
  disablebtn: boolean;
  showUserMsg: boolean;
  showPswdMsg: boolean;
  failedLogin: boolean;
  showLogoutMsg: boolean;
  user: string;
  password: string;
  public loginPage: boolean;

  constructor( @Inject(Router) public router) {
  }

  ngOnInit() {
    this.disablebtn = true;
    this.showUserMsg = false;
    this.showPswdMsg = false;
    this.failedLogin = false;
    this.showLogoutMsg = false;
    this.user = '';
    this.password = '';
    if (!sessionStorage.getItem('userID')) {
      this.loginPage = true;
    } else {
      this.loginPage = false;
      this.router.navigate(['/home']);
    }
    if (sessionStorage.getItem('successFullLoggedOut')) {
      this.showLogoutMsg = true;
      sessionStorage.removeItem('successFullLoggedOut');
    }
  }

  public smLogin() {
    sessionStorage.setItem('userID', this.user);
    sessionStorage.setItem('fName', 'fName');
    this.router.navigate(['/home']);
  }

  public onInputChange(formField) {
    if (formField == 'user') {
      if (this.user.length <= 0) {
        this.showUserMsg = true;
        this.disablebtn = true;
      } else {
        this.showUserMsg = false;
      }
    }
    if (formField == 'pswd') {
      if (this.password.length <= 0) {
        this.showPswdMsg = true;
        this.disablebtn = true;
      } else {
        this.showPswdMsg = false;
      }
    }
    if (this.user.length > 0 && this.password.length > 0) {
      this.showUserMsg = false;
      this.showPswdMsg = false;
      this.disablebtn = false;
    }
  }

  public getBtnClasses() {
    return {
      'btn': true,
      'btn-primary': true,
      'login-button': true,
      'disabled': this.disablebtn,
      'enabled': !this.disablebtn,
    };
  }

}
