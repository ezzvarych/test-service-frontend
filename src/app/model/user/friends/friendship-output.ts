import {UserInfo} from '../user-info';
import {FriendshipStatus} from './friendship-status.enum';

export class FriendshipOutput {
  userConnected: UserInfo;
  status: FriendshipStatus;
}
