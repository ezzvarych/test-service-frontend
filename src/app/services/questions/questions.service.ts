import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API_URL} from '../../model/app-constants';
import {QuestionOutput} from '../../model/question/question-output';
import {QuestionInput} from '../../model/question/question-input';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  private readonly url = `${API_URL}/questions`;

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<QuestionOutput[]> {
    return this.http.get<QuestionOutput[]>(this.url);
  }

  getByTheme(themeId: number): Observable<QuestionOutput[]> {
    console.log(`${API_URL}`);
    console.log(`${this.url}/theme/${themeId}`);
    return this.http.get<QuestionOutput[]>(`${this.url}/theme/${themeId}`);
  }

  saveNewQuestions(newQuestions: QuestionInput[]): Observable<QuestionOutput[]> {
    return this.http.post<QuestionOutput[]>(this.url, newQuestions);
  }
}
