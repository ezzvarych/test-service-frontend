import {Injectable} from '@angular/core';
import {API_URL} from '../../model/app-constants';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AreaThemeVideos} from '../../model/question/area-theme-videos';

@Injectable({
  providedIn: 'root'
})
export class AreaThemeService {

  private readonly url = API_URL + '/theme';

  constructor(private http: HttpClient) { }

  getVideos(themeId: number): Observable<AreaThemeVideos> {
    return this.http.get<AreaThemeVideos>(`${this.url}/${themeId}`);
  }
}
