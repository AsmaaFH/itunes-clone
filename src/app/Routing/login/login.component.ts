import { Component, inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private auth = inject(AuthService);
  private router = inject(Router);

  constructor(){
    if(this.auth.isLoggedIn()){
      this.router.navigate
    }
  }
  login(){
    this.auth.login();
    const previousUrl = this.auth.getPreviousUrl();
    this.router.navigate([previousUrl || '/home']);
  }
}
