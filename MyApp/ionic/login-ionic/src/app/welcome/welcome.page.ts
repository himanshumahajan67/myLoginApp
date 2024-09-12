import { Component, OnInit } from '@angular/core';
import { AuthState, logout } from '../store/auth';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { selectAuth } from '../store/auth/auth.selectors';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  user$: Observable<AuthState>= new Observable();
  user: string = '';
  posts: any[] = [];
  showHome: boolean = true;
  constructor(
    private store: Store<{ auth: AuthState }>,
    private crudService: CrudService
  ) { }

  ngOnInit() {
    this.store.select(selectAuth).subscribe(authState => {
      if (authState && authState.user) {
        this.user = authState.user.displayName || 'Unknown User'; // Set user name
      } else {
        this.user = 'Guest';
      }
    });
    this.fetchPosts();
  }
 
  toggleHome(show: boolean) {
    this.showHome = show;
    console.log(this.user);
  }

  fetchPosts() {
    this.crudService.getPosts().subscribe(data => {
      this.posts = data;
    });
  }

  addNewPost() {
    const newPost = {
      id: this.posts.length + 1,
      title: `New Post ${this.posts.length + 1}`,
      body: 'This is a new post',
      photo: { url: 'https://via.placeholder.com/600/92c952' },
    };
    this.crudService.addPost(newPost).subscribe(() => {
      this.posts.push(newPost); // Add locally
    });
  }

  deletePost(postId: number) {
    this.crudService.deletePost(postId).subscribe(() => {
      this.posts = this.posts.filter(post => post.id !== postId); // Remove from list
    });
  }

  clearAllPosts() {
    this.crudService.clearCache();
    this.fetchPosts();
  }

  logout() {
    this.store.dispatch(logout());
  }

}
