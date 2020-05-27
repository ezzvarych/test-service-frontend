import {Component, OnInit} from '@angular/core';
import {CompetitionsService} from '../../../services/competitions/competitions.service';
import {CompetitionOutput} from '../../../model/competition/competition-output';
import {QuestionAreaService} from '../../../services/questions/question-area.service';
import {QuestionArea} from '../../../model/question/question-area';
import {CreateNewCompetition} from '../../../model/competition/create-new-competition';
import {Router} from '@angular/router';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-all-competitions',
  templateUrl: './all-competitions.component.html',
  styleUrls: ['./all-competitions.component.css']
})
export class AllCompetitionsComponent implements OnInit {

  allCompetitions: CompetitionOutput[] = [];

  myCompetitions: CompetitionOutput[] = [];

  questionAreas: QuestionArea[] = [];

  notification: string;

  state: string;

  newComp: CreateNewCompetition = new CreateNewCompetition();


  ngbDateStruct: NgbDateStruct;
  ngbTimeStruct: {hour: 0, minute: 0};

  constructor(private competitionsService: CompetitionsService, private questionAreaService: QuestionAreaService,
              private router: Router, /* private ngbCalendar: NgbCalendar*/) {
  }

  ngOnInit(): void {
  }

  openAvailable() {
    this.state = 'ALL';
    this.notification = '';
    this.competitionsService.getCompetitions().subscribe(comp => {
      this.allCompetitions = comp;
      if (this.allCompetitions.length === 0) {
        this.notification = 'No competitions available';
      }
    });
  }

  openMy() {
    this.state = 'MY';
    this.notification = '';
    this.competitionsService.getMy().subscribe(comp => {
      this.myCompetitions = comp;
      if (this.myCompetitions.length === 0) {
        this.notification = 'No competitions available';
      }
    });
  }

  createNew() {
    this.state = 'NEW';
    this.notification = '';
    if (this.questionAreas.length === 0) {
      this.questionAreaService.getAll().subscribe(areas => this.questionAreas = areas);
    }
  }

  submitNew() {
    try {
      this.newComp.timeOfStart = new Date(this.ngbDateStruct.year, this.ngbDateStruct.month - 1, this.ngbDateStruct.day).getTime()
        + new Date(1970, 0, 1, this.ngbTimeStruct.hour + 3, this.ngbTimeStruct.minute).getTime();
      console.log(new Date(this.newComp.timeOfStart));
      console.log(new Date());
    } catch (e) {
      this.notification = 'Please, set time and date';
      return;
    }
    if (this.newComp.timeOfStart < new Date().getTime()) {
      this.notification = 'Please, set time in future!!';
      return;
    }
    if (this.newComp.areaId === undefined) {
      this.notification = 'Please, click on area to choose!';
      return;
    }
    this.competitionsService.createNew(this.newComp).subscribe(comp => {
      this.router.navigate(['/competitions/', comp.id]);
    });
  }

  getNow() {
    return new Date().getTime();
  }
}
