import {UserInfo} from '../user/user-info';

export class CommentOutput {
  text: string;
  userInfo: UserInfo = new UserInfo();
  time: number;
}
