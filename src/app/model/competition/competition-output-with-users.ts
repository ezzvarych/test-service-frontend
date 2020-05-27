import {CompetitionOutput} from './competition-output';
import {UserInfo} from '../user/user-info';

export class CompetitionOutputWithUsers {
  competitionInfo: CompetitionOutput = new CompetitionOutput();
  users: UserInfo[] = [];
}
