import {Component, ElementRef, OnInit} from '@angular/core';
import {QuestionAreaService} from '../../../services/questions/question-area.service';
import {ActivatedRoute, Router} from '@angular/router';
import {QuestionArea} from '../../../model/question/question-area';
import {TestService} from '../../../services/tests/test.service';
import {LeaderboardOutput} from '../../../model/leaderboard/leaderboard-output';

@Component({
  selector: 'app-one-area',
  templateUrl: './one-area.component.html',
  styleUrls: ['./one-area.component.css']
})
export class OneAreaComponent implements OnInit {

  questionArea: QuestionArea = new QuestionArea();

  openLeaders = false;
  leaderboard: LeaderboardOutput[] = [];

  isLoaded: Promise<boolean>;

  constructor(private questionAreaService: QuestionAreaService, private testService: TestService,
              private route: ActivatedRoute, private router: Router,
              private el: ElementRef) {
  }

  ngOnInit(): void {
    console.log(localStorage.getItem('user'));
    const id = +this.route.snapshot.paramMap.get('id');
    this.questionAreaService.getOne(id).subscribe(area => {
      this.questionArea = area;
      console.log('HELLO1');
      this.isLoaded = Promise.resolve(true);
    });
  }

  getLeaderboardForArea(id: number) {
    if (this.leaderboard.length > 0) {
      return;
    }
    this.testService.getLeaderboardForArea(id).subscribe(board => this.leaderboard = board);
  }

  startAreaTest() {
    this.router.navigate(['/tests/', this.questionArea.id]);
  }

  setMyStyle() {
    console.log(this.el.nativeElement.offsetHeight);
    const styles = {
      background: ` linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)),
       url("${this.questionArea.imageUrl}") repeat fixed center`,
      'background-size': 'cover'/*,
      height: '90%'*/
    };
    localStorage.setItem('style', JSON.stringify(styles));
    return styles;
  }
}
