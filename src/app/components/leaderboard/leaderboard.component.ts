import {Component, Input, OnInit} from '@angular/core';
import {TestService} from '../../services/tests/test.service';
import {ActivatedRoute} from '@angular/router';
import {LeaderboardOutput} from '../../model/leaderboard/leaderboard-output';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  @Input()
  id: number;

  leaderboard: LeaderboardOutput[] = [];

  constructor(private testService: TestService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.testService.getLeaderboardForArea(this.id).subscribe(board => this.leaderboard = board);
    // this.getLeaderboardForArea(this.areaId);
  }

  getLeaderboardForArea(id: number) {
      this.testService.getLeaderboardForArea(id).subscribe(board => this.leaderboard = board);
  }

}
