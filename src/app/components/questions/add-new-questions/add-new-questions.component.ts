import {Component, Input, OnInit} from '@angular/core';
import {QuestionInput} from '../../../model/question/question-input';
import {TestAnswerOption} from '../../../model/question/test-answer-option';
import {QuestionsService} from '../../../services/questions/questions.service';
import {QuestionType} from '../../../model/question/question-type.enum';
import {QuestionOutput} from '../../../model/question/question-output';
import {AreaTheme} from '../../../model/question/area-theme';

@Component({
  selector: 'app-add-new-questions',
  templateUrl: './add-new-questions.component.html',
  styleUrls: ['./add-new-questions.component.css']
})
export class AddNewQuestionsComponent implements OnInit {

  @Input()
  questionsList: QuestionOutput[];

  @Input()
  theme: AreaTheme;

  questionsInput: QuestionInput[] = [];

  input: QuestionInput = new QuestionInput();

  currentInputOption: TestAnswerOption = new TestAnswerOption('', false);

  enumValues: string[];
  questionTypes = QuestionType;

  notificaion: string;

  constructor(private questionService: QuestionsService) {
  }

  ngOnInit(): void {
    this.enumValues = Object.values(this.questionTypes);
  }

  saveOptions(): void {
    this.input.answerOptions.push(this.currentInputOption);
    this.currentInputOption = new TestAnswerOption('', false);
  }

  deleteOption(option: TestAnswerOption): void {
    this.input.answerOptions = this.input.answerOptions.filter(elem => elem.answer !== option.answer);
  }

  saveQuestion(): void {
    this.input.areaThemeId = this.theme.id;
    this.questionsInput.push(this.input);
    this.questionService.saveNewQuestions(this.questionsInput).subscribe(res => console.log('Successful save of' + res),
      err => console.log('Error message ' + err));
    console.log(this.questionsInput);
    this.input = new QuestionInput();
  }

  sendOnServer(): void {
    this.questionsInput.forEach(q => q.areaThemeId = this.theme.id);
    this.questionService.saveNewQuestions(this.questionsInput).subscribe(res => console.log('Successful save of' + res),
      err => console.log('Error message ' + err));
  }

  private getCountOfCorrect(): number {
    return this.input.answerOptions.filter(opt => opt.correct).length;
  }
}
