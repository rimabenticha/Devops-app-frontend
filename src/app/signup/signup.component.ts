import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  user = {
    name: '',
    email: '',
    password: ''
  };

  signupSuccess = false;
  message = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit(event: Event) {
    event.preventDefault();

    this.authService.signup(this.user).subscribe({
      next: () => {
        this.signupSuccess = true;
        this.message = 'Account created successfully!';
        
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);
      },
      error: () => {
        this.signupSuccess = false;
        this.message = 'Signup failed. Please try again.';
      }
    });
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}