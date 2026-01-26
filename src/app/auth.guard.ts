import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const ok = !!localStorage.getItem('authUser');
    if (!ok) {
      this.router.navigate(['/login']);
    }
    return ok;
  }
}
