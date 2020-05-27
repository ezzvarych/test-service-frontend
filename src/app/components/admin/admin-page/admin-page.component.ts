import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/auth/user.service';
import {UserInfo} from '../../../model/user/user-info';
import {Rol} from '../../../model/user/rol';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  currentUser: UserInfo = (JSON.parse(localStorage.getItem('user')) as UserInfo);

  users: UserInfo[] = [];

  searchInput: string;

  foundUsers: UserInfo[] = [];

  enumValues: string[];
  role = Rol;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.enumValues = Object.values(this.role).filter(r => r !== this.role.ADMIN);
    this.userService.getAll().subscribe(users => this.users = users);
  }

  searchUser() {
    this.userService.searchUser(this.searchInput).subscribe(users => {
      this.foundUsers = users;
      this.searchInput = '';
    });
  }

  delete(id: number) {
    this.userService.deleteUser(id).subscribe(resp => {
      this.users = this.users.filter(u => u.id !== id);
    });
  }

  // save(userInfo: UserInfo) {
  //   console.log(userInfo);
  //   // this.userService.updateUser(userInfo.id, userInfo.realName, userInfo.role).subscribe();
  // }

  changeRole(userInfo: UserInfo, val: any) {
    this.userService.updateUser(userInfo.id, userInfo.realName, val as number).subscribe(v => userInfo.role = val);
  }
}
