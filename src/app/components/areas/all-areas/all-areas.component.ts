import {Component, OnInit} from '@angular/core';
import {QuestionArea} from '../../../model/question/question-area';
import {QuestionAreaService} from '../../../services/questions/question-area.service';

@Component({
  selector: 'app-all-areas',
  templateUrl: './all-areas.component.html',
  styleUrls: ['./all-areas.component.css']
})
export class AllAreasComponent implements OnInit {

  allAreas: QuestionArea[] = [];

  constructor(private questionAreaService: QuestionAreaService) { }

  ngOnInit(): void {
    this.questionAreaService.getAll().subscribe(areas => this.allAreas = areas);
  }

}
