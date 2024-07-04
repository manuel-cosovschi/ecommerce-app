import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLoggedIn: Observable<boolean>;

  constructor(private authService: AuthService) {
    this.isLoggedIn = this.authService.isLoggedIn;
  }

  logout() {
    console.log('Logout clicked');
    this.authService.logout();
  }
}










