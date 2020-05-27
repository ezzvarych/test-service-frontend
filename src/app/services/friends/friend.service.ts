import {Injectable} from '@angular/core';
import {API_URL} from '../../model/app-constants';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserInfo} from '../../model/user/user-info';
import {FriendshipOutput} from '../../model/user/friends/friendship-output';
import {FriendshipAnswer} from '../../model/user/friends/friendship-answer';
import {FriendshipStatus} from '../../model/user/friends/friendship-status.enum';

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  private readonly url = `${API_URL}/friends`;

  constructor(private http: HttpClient) {
  }

  sendRequestTo(userId: number): Observable<any> {
    return this.http.post(this.url, userId);
  }

  answerRequest(answers: FriendshipAnswer[]): Observable<any> {
    return this.http.put<any>(this.url, answers);
  }

  getUserFriends(userId: number): Observable<UserInfo[]> {
    return this.http.get<UserInfo[]>(`${this.url}/${userId}`);
  }

  getLoggedUserFriends(): Observable<FriendshipOutput[]> {
    return this.http.get<FriendshipOutput[]>(this.url);
  }

  getRelationBetweenLoggerAndUser(userId: number): Observable<FriendshipStatus> {
    return this.http.get<FriendshipStatus>(`${this.url}/${userId}/status`);
  }
}
