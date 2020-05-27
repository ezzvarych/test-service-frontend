import {Component, OnInit} from '@angular/core';
import {QuestionsService} from '../../../services/questions/questions.service';
import {QuestionOutput} from '../../../model/question/question-output';

@Component({
  selector: 'app-all-questions',
  templateUrl: './all-questions.component.html',
  styleUrls: ['./all-questions.component.css']
})
export class AllQuestionsComponent implements OnInit {

  questionOutputs: QuestionOutput[];

  questionsVisible = true;

  constructor(private questionService: QuestionsService) {
  }

  ngOnInit(): void {
    this.questionService.getAll().subscribe(quest => this.questionOutputs = quest);
  }

  getQuestions(): void {
    if (this.questionOutputs) {
      return;
    } else {
      this.questionService.getAll().subscribe(quest => this.questionOutputs = quest);
    }
  }
}
