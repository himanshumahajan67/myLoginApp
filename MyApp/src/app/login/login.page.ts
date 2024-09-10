import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthState, login } from '../store/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  authState$: Observable<AuthState>;

  constructor(private store: Store<{ auth: AuthState }>) {
    this.authState$ = this.store.select(state => state.auth);
  }

  ngOnInit() {}

  loginWithGoogle() {
    this.store.dispatch(login());
  }
}
