import { Injectable } from '@angular/core';
import { User } from '../model/user.model';  // Assuming user model replaces User
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User[] = [
    { "username": "admin", "password": "123", "roles": ['ADMIN'] },
    { "username": "zaineb", "password": "456", "roles": ['USER'] }
  ];

  public loggeduser!: string;  // Renamed from loggedUser to loggeduser
  public isloggedIn: Boolean = false;
  public roles!: string[];

  constructor(private router: Router) {}

  SignIn(user: User): Boolean {  // Renamed from user to user
    let validUser: Boolean = false;  // Renamed from validUser to validuser
    this.user.forEach((curuser) => {  // Renamed from curUser to curuser
      if (user.username == curuser.username && user.password == curuser.password) {
        validUser = true;

        this.loggeduser = curuser.username;
        this.isloggedIn = true;
        this.roles = curuser.roles;
        localStorage.setItem('loggeduser', this.loggeduser);  // Renamed from loggedUser to loggeduser
        localStorage.setItem('isloggedIn', String(this.isloggedIn));
      }
    });
    return validUser;
  }

  isAdmin(): Boolean {
    if (!this.roles)  // this.roles == undefined
      return false;
    return (this.roles.indexOf('ADMIN') > -1);
  }

  logout() {
    this.isloggedIn = false;
    this.loggeduser = undefined!;  // Renamed from loggedUser to loggeduser
    this.roles = undefined!;
    localStorage.removeItem('loggeduser');  // Renamed from loggedUser to loggeduser
    localStorage.setItem('isloggedIn', String(this.isloggedIn));
    this.router.navigate(['/login']);
  }

  setLoggeduserFromLocalStorage(login: string) {  // Renamed from setLoggedUserFromLocalStorage
    this.loggeduser = login;
    this.isloggedIn = true;
    this.getuserRoles(login);  // Renamed from getUserRoles to getuserRoles
  }

  getuserRoles(username: string) {  // Renamed from getUserRoles to getuserRoles
    this.user.forEach((curuser) => {  // Renamed from curUser to curuser
      if (curuser.username == username) {
        this.roles = curuser.roles;
      }
    });
  }
}
