import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  constructor(private router: Router) {
  }

  public login(userName: string, password: string): boolean {
    if (userName === 'admin' && password === 'x') {
      this.loggedIn.next(true);
      this.router.navigate(['/page1']);
      return true;
    } else {
      return false;
    }
  }

  public logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/']);
  }

  public listMenu(): any[] {
    return [{
      label: 'Page1',
      path: '/page1'
    }, {
      label: 'Page2',
      path: '/page2'
    }, {
      label: 'Logout',
      logout: true
    },
    ];
  }
}
