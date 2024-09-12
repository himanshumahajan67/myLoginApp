import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthState } from '../app/store/auth';
import { selectAuth } from '../app/store/auth/auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private store: Store<{ auth: AuthState }>, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.store.select(selectAuth).pipe(
      take(1), // Only take the first emission from the observable
      map(authState => {
        if (authState && authState.user) {
          return true; // User is authenticated
        } else {
          this.router.navigate(['/login']); // Redirect to login if not authenticated
          return false;
        }
      })
    );
  }
}