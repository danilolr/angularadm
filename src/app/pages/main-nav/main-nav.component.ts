import { Component } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {

  isHandset$ = false;
  isLoggedIn$: Observable<boolean>;
  menu: any[];

  constructor(private router: Router, private breakpointObserver: BreakpointObserver, private auth: AuthService) {
    this.isLoggedIn$ = this.auth.isLoggedIn;
    this.menu = this.auth.listMenu();
  }

  selected(option: any) {
    if (option.path) {
      this.router.navigate([option.path]);
    }
    if (option.logout) {
      this.auth.logout();
    }
  }

}
