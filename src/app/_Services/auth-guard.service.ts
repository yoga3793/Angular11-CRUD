import { Injectable } from '@angular/core';
import { Router, CanActivate } from "@angular/router";



@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {



  constructor(
    private router: Router
  ) { }

  public canActivate(): boolean {
    debugger;
    if (!this.isAuthenticated()) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }

  private isAuthenticated(): boolean {
    debugger;
    let isloggedIn = localStorage.getItem('isloggedIn');
    if (isloggedIn && isloggedIn == 'true') {
      return true
    }
    return false;
  }
}
