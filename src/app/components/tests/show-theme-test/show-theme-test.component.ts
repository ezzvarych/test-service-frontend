import {Component, Input, OnInit} from '@angular/core';
import {TestService} from '../../../services/tests/test.service';
import {QuestionType} from '../../../model/question/question-type.enum';
import {QuestionOutput} from '../../../model/question/question-output';
import {UserAnswer} from '../../../model/question/user-answer';
import {UserAnswerAnalysisOutput} from '../../../model/question/user-answer-analysis-output';
import {UserAnswersHandlingService} from '../../../services/questions/user-answers-handling.service';

@Component({
  selector: 'app-show-theme-test',
  templateUrl: './show-theme-test.component.html',
  styleUrls: ['./show-theme-test.component.css']
})
export class ShowThemeTestComponent implements OnInit {

  @Input()
  themeId: number;

  questions: QuestionOutput[] = [];

  userAnswers: UserAnswer[] = [];

  questionType = QuestionType;

  testIsFinished: Promise<boolean>;

  analysis: UserAnswerAnalysisOutput[] = [];
  analysisMap: Map<number, UserAnswerAnalysisOutput> = new Map<number, UserAnswerAnalysisOutput>();

  constructor(private testService: TestService, private userAnswersHandlingService: UserAnswersHandlingService) {
  }

  ngOnInit(): void {
    this.testService.createNewTestForTheme(this.themeId).subscribe(questions => {
      this.questions = questions;
      this.userAnswers = this.questions.map(q => {
        const n = new UserAnswer();
        n.questionId = q.id;
        return n;
      });
    });
  }

  getResult() {
    this.userAnswers = this.userAnswersHandlingService.mapAnswersOnQuestions(this.questions, this.userAnswers);
    this.testService.getThemeTestResult(this.userAnswers).subscribe((an: UserAnswerAnalysisOutput[]) => {
      this.analysis = an.map(a => new UserAnswerAnalysisOutput(a.userAnswerDto, a.correct));
      this.analysis.forEach(value => this.analysisMap.set(value.userAnswerDto.questionId, value));
      this.testIsFinished = Promise.resolve(true);
    });
  }

}
