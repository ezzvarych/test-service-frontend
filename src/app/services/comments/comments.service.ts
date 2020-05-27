import {Injectable} from '@angular/core';
import {API_URL} from '../../model/app-constants';
import {Observable} from 'rxjs';
import {CommentOutput} from '../../model/video/comment-output';
import {HttpClient} from '@angular/common/http';
import {CommentInput} from '../../model/video/comment-input';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private readonly url = `${API_URL}/comments`;

  constructor(private http: HttpClient) {
  }

  getVideoComments(videoId: number): Observable<CommentOutput[]> {
    return this.http.get<CommentOutput[]>(`${this.url}/${videoId}`);
  }

  postComment(commentInput: CommentInput): Observable<CommentOutput> {
    return this.http.post<CommentOutput>(this.url, commentInput);
  }
}
