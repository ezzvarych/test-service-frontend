import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/auth/user.service';
import {UserInfo} from '../../model/user/user-info';
import {DataSharingService} from '../../services/data-sharing.service';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {Rol} from '../../model/user/rol';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {

  user: UserInfo;

  isLogged = localStorage.getItem('token') !== null;

  role = Rol;

  constructor(private authService: UserService, private dataSharingService: DataSharingService,
              private router: Router, private location: Location) {
    this.dataSharingService.isUserLoggedIn.subscribe(value => {
      if (value) {
        this.isLogged = true;
        this.authService.getCurrentUser().subscribe(user => this.user = user);
      }
    });
  }

  ngOnInit(): void {
    this.user = localStorage.getItem('user') ?
      JSON.parse(localStorage.getItem('user')) : null;
    console.log(this.isLogged);
    this.dataSharingService.isUserLoggedIn.subscribe(value => {
      if (value) {
        this.isLogged = true;
        this.getCurrentUser();
      }
    });
    // const allowedUrlList = ['/', '/login', '/register'];
    // console.log(allowedUrlList.includes(this.location.path()) + ' ' + this.user);
    // if (allowedUrlList.includes(this.location.path()) && !this.isLogged) {
    //   return;
    // }
    this.getCurrentUser();
  }

  logout(): void {
    this.isLogged = false;
    localStorage.clear();
    this.router.navigate(['/']);
  }

  click() {
    console.log(this.user);
  }

  getCurrentUser() {
    if (this.user) {
      return;
    }
    this.authService.getCurrentUser().subscribe((user: UserInfo) => {
      this.user = user;
      console.log('Called');
      localStorage.setItem('user', JSON.stringify(user));
    });
  }
}
