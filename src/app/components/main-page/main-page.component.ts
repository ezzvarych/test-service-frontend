import {Component, OnInit} from '@angular/core';
import {QuestionArea} from '../../model/question/question-area';
import {QuestionAreaService} from '../../services/questions/question-area.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  allAreas: QuestionArea[] = [];

  constructor(private questionAreaService: QuestionAreaService) { }

  ngOnInit(): void {
    this.questionAreaService.getAll().subscribe(areas => this.allAreas = areas);
  }
}
