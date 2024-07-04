import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

interface User {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  private users: User[] = [
    { username: 'manucosovs', password: 'yotambien' },
    { username: 'martinmsoler', password: 'melacomotoda' }
  ];

  get isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    const user = this.users.find(u => u.username === username && u.password === password);
    if (user) {
      console.log('Login exitoso');
      this.loggedIn.next(true);
      this.router.navigate(['/productos']);
      return true;
    } else {
      console.log('Login fallido');
      this.loggedIn.next(false);
      return false;
    }
  }

  logout() {
    console.log('Cerrando sesión');
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}











