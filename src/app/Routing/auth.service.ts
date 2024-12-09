import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private previousUrl: string | null = null;
  private router = inject(Router);
  constructor() {}

  login() {
    if (typeof window !== 'undefined') {
      localStorage.setItem('loggedIn', 'true');
    }
  }

  logout() {
    if (typeof window !== 'undefined') {
      localStorage.setItem('loggedIn', 'false');
    }
    this.router.navigate(['/home']);
  }

  isLoggedIn(): boolean {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('loggedIn') === 'true';
    }
    return false;
  }

  setPreviousUrl(url: string) {
    this.previousUrl = url;
  }

  getPreviousUrl(): string | null {
    return this.previousUrl;
  }
}
