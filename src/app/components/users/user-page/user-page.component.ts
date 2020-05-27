import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../../services/auth/user.service';
import {UserInfo} from '../../../model/user/user-info';
import {FriendService} from '../../../services/friends/friend.service';
import {AllOneUserInfo} from '../../../model/user/all-one-user-info';
import {FriendshipStatus} from '../../../model/user/friends/friendship-status.enum';
import {PostInput} from '../../../model/user/posts/post-input';
import {PostService} from '../../../services/posts/post.service';
import {Rol} from '../../../model/user/rol';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  id: number;

  allOneUserInfo: AllOneUserInfo = new AllOneUserInfo();
  friends: UserInfo[];

  friendsAreOpened: boolean;

  currentUser: number = (JSON.parse(localStorage.getItem('user')) as UserInfo).id;

  relationWithLoggedUser: FriendshipStatus;
  friendshipStatus = FriendshipStatus;
  messageToUser: string;

  newPostInput: PostInput = new PostInput();

  role = Rol;

  constructor(private userService: UserService, private friendsService: FriendService,
              private postService: PostService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.updateComponentForAnotherUser(this.id);
  }

  private setInitValues(id: number) {
    this.id = id;
    this.friendsAreOpened = false;
    this.friends = [];
  }

  getLoggedUserRelation(id: number) {
    this.friendsService.getRelationBetweenLoggerAndUser(id).subscribe(rel => this.relationWithLoggedUser = rel);
  }

  updateComponentForAnotherUser(id: number) {
    this.setInitValues(id);
    this.userService.getUserById(id).subscribe((user: AllOneUserInfo) => {
      this.allOneUserInfo = user;
    });
    this.getLoggedUserRelation(id);
  }

  getUserFriends() {
    if (this.friends.length > 0) {
      return;
    }
    this.friendsService.getUserFriends(this.id).subscribe((friends: UserInfo[]) => {
      this.friends = friends;
    });
  }

  createNewPost() {
    this.newPostInput.userId = this.currentUser;
    this.postService.createNewPost(this.newPostInput).subscribe(post => {
      this.allOneUserInfo.userNews.posts.unshift(post);
      this.newPostInput = new PostInput();
    });
  }

  invite() {
    this.friendsService.sendRequestTo(this.id).subscribe(resp => {
      this.messageToUser = 'Request is sent';
      this.relationWithLoggedUser = this.friendshipStatus.PENDING;
    });
  }
}
