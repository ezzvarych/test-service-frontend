import {Injectable} from '@angular/core';
import {API_URL} from '../../model/app-constants';
import {Observable} from 'rxjs';
import {ThemeVideo} from '../../model/video/theme-video';
import {HttpClient} from '@angular/common/http';
import {NewVideo} from '../../model/video/new-video';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private readonly url = `${API_URL}/video`;

  constructor(private http: HttpClient) {
  }

  getVideosByThemeId(id: number): Observable<ThemeVideo[]> {
    console.log(`${API_URL}`);
    return this.http.get<ThemeVideo[]>(`${this.url}/theme/${id}`);
  }

  addNew(newVideo: NewVideo): Observable<any> {
    return this.http.post(this.url, newVideo);
  }

  delete(videoId: number): Observable<any> {
    return this.http.delete(`${this.url}/${videoId}`);
  }
}
