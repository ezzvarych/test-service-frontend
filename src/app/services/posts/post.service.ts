import {Injectable} from '@angular/core';
import {API_URL} from '../../model/app-constants';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {PostOutput} from '../../model/user/posts/post-output';
import {PostInput} from '../../model/user/posts/post-input';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private readonly url = `${API_URL}/posts`;

  constructor(private http: HttpClient) { }

  createNewPost(postInput: PostInput): Observable<PostOutput> {
    return this.http.post<PostOutput>(this.url, postInput);
  }
}
