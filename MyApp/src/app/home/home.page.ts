import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { logout } from '../store/auth/auth.actions';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private store: Store) {}

  logout() {
    this.store.dispatch(logout());
  }
}
