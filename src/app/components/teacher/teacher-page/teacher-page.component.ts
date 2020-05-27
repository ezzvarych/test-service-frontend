import {Component, OnInit} from '@angular/core';
import {UserInfo} from '../../../model/user/user-info';
import {QuestionArea} from '../../../model/question/question-area';
import {QuestionAreaService} from '../../../services/questions/question-area.service';
import {Rol} from '../../../model/user/rol';

@Component({
  selector: 'app-teacher-page',
  templateUrl: './teacher-page.component.html',
  styleUrls: ['./teacher-page.component.css']
})
export class TeacherPageComponent implements OnInit {

  user: UserInfo = (JSON.parse(localStorage.getItem('user')) as UserInfo);

  role = Rol;

  allAreas: QuestionArea[] = [];

  constructor(private questionAreaService: QuestionAreaService) { }

  ngOnInit(): void {
    this.questionAreaService.getAll().subscribe(areas => this.allAreas = areas);
  }

}
