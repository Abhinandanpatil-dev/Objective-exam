import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../authentication/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  welcomeNote = 'Welcome to objective online exam';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  logOut() {
    this.authService.logout();
    this.router.navigate(['/authentication/login']);
  }
}
