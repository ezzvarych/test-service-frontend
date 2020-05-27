import {Component, OnInit} from '@angular/core';
import {TestService} from '../../../services/tests/test.service';
import {ActivatedRoute} from '@angular/router';
import {TestOutput} from '../../../model/test/test-output';
import {UserAnswer} from '../../../model/question/user-answer';
import {QuestionType} from '../../../model/question/question-type.enum';
import {UserAnswerAnalysisOutput} from '../../../model/question/user-answer-analysis-output';
import {TestResultAndAnalysis} from '../../../model/test/test-result-and-analysis';
import {TestResultOutput} from '../../../model/test/test-result-output';
import {UserAnswersHandlingService} from '../../../services/questions/user-answers-handling.service';

@Component({
  selector: 'app-show-area-test',
  templateUrl: './show-area-test.component.html',
  styleUrls: ['./show-area-test.component.css']
})
export class ShowAreaTestComponent implements OnInit {

  test: TestOutput = new TestOutput();

  userAnswers: UserAnswer[] = [];

  questionType = QuestionType;

  testIsFinished: Promise<boolean>;

  testResult: TestResultOutput = new TestResultOutput();

  analysis: any[] = [];
  analysisMap: Map<number, UserAnswerAnalysisOutput> = new Map<number, UserAnswerAnalysisOutput>();

  constructor(private testService: TestService, private userAnswersHandlingService: UserAnswersHandlingService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.testService.createNewTestForArea(id).subscribe(t => {
      this.test = t;
      this.userAnswers = this.test.testQuestions.map(q => {
        const n = new UserAnswer();
        n.questionId = q.id;
        return n;
      });
    });
  }

  getResult() {
    this.userAnswers = this.userAnswersHandlingService.mapAnswersOnQuestions(this.test.testQuestions, this.userAnswers);
    this.testService.getAreaThemeResult(this.test.testId, this.userAnswers).subscribe((an: TestResultAndAnalysis) => {
      this.testResult = an.testResult;
      this.analysis = an.userAnswerAnalysisList.map(a => new UserAnswerAnalysisOutput(a.userAnswerDto, a.correct));
      this.analysis.forEach(value => this.analysisMap.set(value.userAnswerDto.questionId, value));
      this.testIsFinished = Promise.resolve(true);
    });
  }

  setStyle() {
    return JSON.parse(localStorage.getItem('style'));
  }

}
