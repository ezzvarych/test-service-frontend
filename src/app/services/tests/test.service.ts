import {Injectable} from '@angular/core';
import {API_URL} from '../../model/app-constants';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {QuestionOutput} from '../../model/question/question-output';
import {UserAnswer} from '../../model/question/user-answer';
import {UserAnswerAnalysisOutput} from '../../model/question/user-answer-analysis-output';
import {LeaderboardOutput} from '../../model/leaderboard/leaderboard-output';
import {TestOutput} from '../../model/test/test-output';
import {TestResultAndAnalysis} from '../../model/test/test-result-and-analysis';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private readonly url = `${API_URL}/tests`;

  constructor(private http: HttpClient) {
  }

  createNewTestForArea(areaId: number): Observable<TestOutput> {
    return this.http.get<TestOutput>(`${this.url}/area/${areaId}`);
  }

  createNewTestForTheme(themeId: number): Observable<QuestionOutput[]> {
    return this.http.get<QuestionOutput[]>(`${this.url}/theme/${themeId}`);
  }

  getAreaThemeResult(test: number, userAnswers: UserAnswer[]): Observable<TestResultAndAnalysis> {
    return this.http.post<TestResultAndAnalysis>(`${this.url}/finish/area`, {testId: test, userAnswerDtos: userAnswers});
  }

  getThemeTestResult(userAnswers: UserAnswer[]): Observable<UserAnswerAnalysisOutput[]> {
    return this.http.post<UserAnswerAnalysisOutput[]>(`${this.url}/finish/theme`, userAnswers);
  }

  getLeaderboardForArea(areaId: number): Observable<LeaderboardOutput[]> {
    return this.http.get<LeaderboardOutput[]>(`${this.url}/leader/${areaId}`);
  }
}
