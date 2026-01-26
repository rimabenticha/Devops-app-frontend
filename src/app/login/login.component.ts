import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user = {
    email: '',
    password: ''
  };

  loginSuccess = false;
  message = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit(event: Event) {
    event.preventDefault();

    this.authService.login(this.user).subscribe({
      next: () => {
        this.loginSuccess = true;
        this.message = 'Login successful! Welcome back ';

        try { localStorage.setItem('authUser', JSON.stringify(this.user.email || 'user')); } catch(e) {}
        setTimeout(() => {
          this.router.navigate(['/dashbord']);
        }, 400);
      },
      error: () => {
        this.loginSuccess = false;
        this.message = 'Invalid email or password.';
      }
    });
  }

  goToSignup() {
    this.router.navigate(['/signup']);
  }
}