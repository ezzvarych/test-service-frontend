import {Injectable} from '@angular/core';
import {API_URL} from '../../model/app-constants';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {QuestionArea} from '../../model/question/question-area';

@Injectable({
  providedIn: 'root'
})
export class QuestionAreaService {

  private readonly url = `${API_URL}/areas`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<QuestionArea[]> {
    return this.http.get<QuestionArea[]>(this.url);
  }

  getOne(id: number): Observable<QuestionArea> {
    return this.http.get<QuestionArea>(`${this.url}/${id}`);
  }
}
