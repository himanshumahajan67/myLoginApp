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
  images = [
    'https://imgs.search.brave.com/vmylxhIOCKyBgPBIFl_eBESZ9VMNyjOEYqPn11xfc1M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTI4/NDc0MDEwL3Bob3Rv/L21ha2luZy1tZW1v/cmllcy5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9NWFxRzZR/azRrbXdaeWtTdWZH/S1g1ZmZublYxT3A4/Sk9TYl95cnp1R0RM/VT0',
    'https://imgs.search.brave.com/t6JbDBTMz2lc4fQ0oA1rhG-bBElmeIAfI31Os1OVyfM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvbWVjaGFuaWMt/MDMycDh2bXpqZmcx/ZnE5dC5qcGc',
    'https://imgs.search.brave.com/tOagZwBaW4nQVeKc7bq8ju8m-yP35X6nIBrhIch-SWs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9nZXR3/YWxscGFwZXJzLmNv/bS93YWxscGFwZXIv/ZnVsbC83LzAvNi8x/MDg3MDQ1LWZyZWUt/bWVjaGFuaWMtd2Fs/bHBhcGVycy0xOTIw/eDE0NDAuanBn',
  ];
  slide: number = 0;

  constructor(private store: Store<{ auth: AuthState }>) {
    this.authState$ = this.store.select(state => state.auth);
  }

  ngOnInit() {}

  changeImage() {
    this.slide = (this.slide + 1) % this.images.length;
  }

  loginWithGoogle() {
    this.store.dispatch(login());
  }

}
