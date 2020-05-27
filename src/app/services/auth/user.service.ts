import {Injectable} from '@angular/core';
import {API_URL} from '../../model/app-constants';
import {HttpClient, HttpParams} from '@angular/common/http';
import {UserRegisterInfo} from '../../model/user/user-register-info';
import {Observable} from 'rxjs';
import {UserLoginInfo} from '../../model/user/user-login-info';
import {UserInfo} from '../../model/user/user-info';
import {AllOneUserInfo} from '../../model/user/all-one-user-info';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly url = `${API_URL}/users`;

  constructor(private http: HttpClient) {
  }

  register(userInfo: UserRegisterInfo): Observable<any> {
    return this.http.post<any>(`${this.url}/register`, userInfo);
  }

  login(loginInfo: UserLoginInfo): Observable<string> {
    return this.http.post(`${this.url}/login`, loginInfo,
      {responseType: 'text'});
  }

  getCurrentUser(): Observable<UserInfo> {
    return this.http.get<UserInfo>(`${this.url}/me`);
  }

  getUserById(userId: number): Observable<AllOneUserInfo> {
    return this.http.get<AllOneUserInfo>(`${this.url}/${userId}`);
  }

  searchUser(pattern: string): Observable<UserInfo[]> {
    return this.http.get<UserInfo[]>(`${this.url}/search`, {params: new HttpParams().append('pattern', pattern)});
  }

  getAll(): Observable<UserInfo[]> {
    return this.http.get<UserInfo[]>(this.url);
  }

  deleteUser(userId: number): Observable<any> {
    return this.http.delete(`${this.url}/${userId}`);
  }

  updateUser(userId: number, userRealName: string, userRole: number): Observable<any> {
    return this.http.put(`${this.url}/${userId}`, {role: userRole, realName: userRealName});
  }
}
