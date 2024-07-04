import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService as Auth0Service } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: Auth0Service, public router: Router) {}

  public login(): void {
    this.auth.loginWithRedirect();
  }

  public logout(): void {
    this.auth.logout({ logoutParams: { returnTo: document.location.origin } });
  }

  public isAuthenticated$ = this.auth.isAuthenticated$;
}





