import {Component, OnInit} from '@angular/core';
import {CompetitionsService} from '../../../../services/competitions/competitions.service';
import {CompetitionOutputWithUsers} from '../../../../model/competition/competition-output-with-users';
import {ActivatedRoute} from '@angular/router';
import {UserInfo} from '../../../../model/user/user-info';
import {Status} from '../../../../model/test/status.enum';
import {UserAnswer} from '../../../../model/question/user-answer';
import {QuestionOutput} from '../../../../model/question/question-output';
import {QuestionType} from '../../../../model/question/question-type.enum';
import {CompetitionResult} from '../../../../model/competition/competition-result';
import {UserAnswersHandlingService} from '../../../../services/questions/user-answers-handling.service';

@Component({
  selector: 'app-one-competition',
  templateUrl: './one-competition.component.html',
  styleUrls: ['./one-competition.component.css']
})
export class OneCompetitionComponent implements OnInit {

  currentUser: UserInfo = (JSON.parse(localStorage.getItem('user')) as UserInfo);
  info: CompetitionOutputWithUsers = new CompetitionOutputWithUsers();
  currentUserCompete = false;
  canStart = false;
  questionShown = false;
  questions: QuestionOutput[] = [];
  userAnswers: UserAnswer[] = [];
  competitionResult: CompetitionResult = new CompetitionResult();
  allCompResults: CompetitionResult[] = [];
  questionType = QuestionType;
  status = Status;
  notification: string;

  constructor(private competitionsService: CompetitionsService, private userAnswersHandlingService: UserAnswersHandlingService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.competitionsService.getOne(id).subscribe(info => {
      this.info = info;
      this.currentUserCompete = this.info.users.filter(user => user.id === this.currentUser.id).length > 0;
      if (this.currentUserCompete && this.info.competitionInfo.status === Status.CONTINUE.ordinal
        && this.info.competitionInfo.startTime < new Date().getTime()) {
        this.canStart = true;
      }
    });
  }

  openQuestions() {
    this.competitionsService.startCompetition(this.info.competitionInfo.id).subscribe(comp => {
      this.questionShown = true;
      this.questions = comp.questions;
      this.userAnswers = this.questions.map(q => {
        const n = new UserAnswer();
        n.questionId = q.id;
        return n;
      });
      this.canStart = false;
    });
  }

  joinCompetition() {
    this.competitionsService.joinCompetition(this.info.competitionInfo.id).subscribe(ans => {
        this.currentUserCompete = true;
        this.info.users.unshift(this.currentUser);
      },
      error1 => this.notification = 'Something went wrong');
  }

  finishComp() {
    this.userAnswers = this.userAnswersHandlingService.mapAnswersOnQuestions(this.questions, this.userAnswers);
    this.competitionsService.finishCompetition(this.info.competitionInfo.id, this.userAnswers).subscribe(
      res => {
        this.competitionResult = res;
        this.questionShown = false;
      });
  }

  getCompRes() {
    this.competitionsService.getResults(this.info.competitionInfo.id).subscribe(res => this.allCompResults = res);
  }

  getStatus(statusOrdinal: number) {
    return Status.getStatusFromOrdinal(statusOrdinal);
  }
}
