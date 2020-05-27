import {Injectable} from '@angular/core';
import {API_URL} from '../../model/app-constants';
import {Observable} from 'rxjs';
import {CompetitionOutput} from '../../model/competition/competition-output';
import {HttpClient} from '@angular/common/http';
import {CreateNewCompetition} from '../../model/competition/create-new-competition';
import {CompetitionOutputWithUsers} from '../../model/competition/competition-output-with-users';
import {CompetitionOutputWithQuestions} from '../../model/competition/competition-output-with-questions';
import {UserAnswer} from '../../model/question/user-answer';
import {CompetitionResult} from '../../model/competition/competition-result';

@Injectable({
  providedIn: 'root'
})
export class CompetitionsService {

  private readonly url = `${API_URL}/compete`;

  constructor(private http: HttpClient) { }

  getCompetitions(): Observable<CompetitionOutput[]> {
    return this.http.get<CompetitionOutput[]>(this.url);
  }

  getMy(): Observable<CompetitionOutput[]> {
    return this.http.get<CompetitionOutput[]>(`${this.url}/my`);
  }

  createNew(newComp: CreateNewCompetition): Observable<CompetitionOutput> {
    return this.http.post<CompetitionOutput>(this.url, newComp);
  }

  joinCompetition(compId: number): Observable<any> {
    return this.http.put<any>(`${this.url}/${compId}`, null);
  }

  getOne(compId: number): Observable<CompetitionOutputWithUsers> {
    return this.http.get<CompetitionOutputWithUsers>(`${this.url}/${compId}/info`);
  }

  startCompetition(compId: number): Observable<CompetitionOutputWithQuestions> {
    return this.http.get<CompetitionOutputWithQuestions>(`${this.url}/${compId}/start`);
  }

  finishCompetition(compId: number, userAnswers: UserAnswer[]): Observable<CompetitionResult> {
    return this.http.put<CompetitionResult>(this.url, {testId: compId, userAnswerDtos: userAnswers});
  }

  getResults(compId: number): Observable<CompetitionResult[]> {
    return this.http.get<CompetitionResult[]>(`${this.url}/${compId}/results`);
  }
}
