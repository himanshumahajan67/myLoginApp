import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  loginWithGoogle(): Promise<firebase.auth.UserCredential> {
    return this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout(): Promise<void> {
    return this.afAuth.signOut();
  }

  getAuthState(): Observable<firebase.User | null> {
    return this.afAuth.authState;
  }

  getCurrentUser(): Observable<firebase.User | null> {
    return this.afAuth.user;
  }
}