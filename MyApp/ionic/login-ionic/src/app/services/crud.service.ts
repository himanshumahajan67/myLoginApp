import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';
  private cacheKey = 'cachedPosts';

  constructor(private http: HttpClient) {}

  // Fetch posts and merge them with photos
  getPosts(): Observable<any[]> {
    const cachedPosts = this.getCachedPosts();
    if (cachedPosts) {
      return of(cachedPosts); // Serve from cache if available
    }

    return this.http.get<any[]>(`${this.baseUrl}/posts`).pipe(
      map(posts => posts.slice(0, 3)), // Only show 3 posts initially
      switchMap(posts => 
        this.http.get<any[]>(`${this.baseUrl}/photos`).pipe(
          map(photos => 
            posts.map(post => ({
              ...post,
              photo: photos.find(photo => photo.id === post.id) // Merge photo with post
            }))
          )
        )
      ),
      tap(posts => this.setCachedPosts(posts)) // Cache the posts
    );
  }

  // Add a new post
  addPost(post: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/posts`, post).pipe(
      tap(() => {
        const cachedPosts = this.getCachedPosts() || [];
        cachedPosts.push(post); // Add to cache
        this.setCachedPosts(cachedPosts);
      })
    );
  }

  // Delete a post from the local list and update cache
  deletePost(postId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/posts/${postId}`).pipe(
      tap(() => {
        let cachedPosts = this.getCachedPosts() || [];
        cachedPosts = cachedPosts.filter(post => post.id !== postId); // Remove from cache
        this.setCachedPosts(cachedPosts);
      })
    );
  }

  // Cache helper methods
  private getCachedPosts(): any[] | null {
    const cache = localStorage.getItem(this.cacheKey);
    return cache ? JSON.parse(cache) : null;
  }

  private setCachedPosts(posts: any[]): void {
    localStorage.setItem(this.cacheKey, JSON.stringify(posts));
  }

  clearCache(): void {
    localStorage.removeItem(this.cacheKey);
  }
}
