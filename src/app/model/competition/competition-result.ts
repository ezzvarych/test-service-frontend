import {UserInfo} from '../user/user-info';

export class CompetitionResult {
  competitionId: number;
  user: UserInfo = new UserInfo();
  result: number;
  timeSpent: number;
}
