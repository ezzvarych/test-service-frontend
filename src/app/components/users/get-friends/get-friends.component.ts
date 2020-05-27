import {Component, OnDestroy, OnInit} from '@angular/core';
import {FriendService} from '../../../services/friends/friend.service';
import {FriendshipOutput} from '../../../model/user/friends/friendship-output';
import {FriendshipStatus} from '../../../model/user/friends/friendship-status.enum';
import {UserInfo} from '../../../model/user/user-info';
import {FriendshipAnswer} from '../../../model/user/friends/friendship-answer';
import {UserService} from '../../../services/auth/user.service';

@Component({
  selector: 'app-get-friends',
  templateUrl: './get-friends.component.html',
  styleUrls: ['./get-friends.component.css']
})
export class GetFriendsComponent implements OnInit, OnDestroy {

  searchInput: string;
  foundUsers: UserInfo[] = [];

  friends: FriendshipOutput[] = [];

  isLoaded: Promise<boolean>;
  friendshipStatus = FriendshipStatus;

  updatedFriendships: FriendshipAnswer[] = [];

  constructor(private friendService: FriendService, private userService: UserService) {
  }

  ngOnInit(): void {
    this.friendService.getLoggedUserFriends().subscribe((friends: FriendshipOutput[]) => {
      this.friends = friends;
      this.isLoaded = Promise.resolve(true);
    }, error1 => {
      console.log('ERROR');
    });
  }

  ngOnDestroy(): void {
    console.log('DESTROY');
    if (this.updatedFriendships.length > 0) {
      this.friendService.answerRequest(this.updatedFriendships).subscribe();
    }
  }

  getConfirmedFriends(): UserInfo[] {
    return this.friends.filter(friend => FriendshipStatus.ACCEPTED === friend.status)
      .map(friend => friend.userConnected);
  }

  getPendingFriends(): UserInfo[] {
    return this.friends.filter(friend => FriendshipStatus.PENDING === friend.status)
      .map(friend => friend.userConnected);
  }

  changeStatus(userId: number, status: FriendshipStatus) {
    const update = new FriendshipAnswer();
    update.answer = status;
    update.userId = userId;
    this.updatedFriendships.push(update);
    this.friends.find(output => output.userConnected.id === userId).status = status;
  }

  searchUser() {
    this.userService.searchUser(this.searchInput).subscribe(users => {
      this.foundUsers = users;
      this.searchInput = '';
    });
  }
}
