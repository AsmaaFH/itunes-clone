import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  public auth = inject(AuthService);

  ngOnInit(){
    // console.log(this.auth.isLoggedIn());
  }
  goSearch(){
    let part = "foo";
    this.router.navigate(['search', part, 'moo']).then(success => {
      // console.log('Navigation success:', success);
    }).catch(err => {
      console.error('Navigation error:', err);
    });
  }
  logout(){
    this.auth.logout();
  }
  login(){
    this.auth.login();
  }
}
