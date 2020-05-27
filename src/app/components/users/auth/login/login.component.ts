import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../../services/auth/user.service';
import {Router} from '@angular/router';
import {UserLoginInfo} from '../../../../model/user/user-login-info';
import {DataSharingService} from '../../../../services/data-sharing.service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm;
  input: UserLoginInfo = new UserLoginInfo();

  errorMessage: string;

  constructor(private authService: UserService, private router: Router, private formBuilder: FormBuilder,
              private dataSharingService: DataSharingService) {
    this.loginForm = this.formBuilder.group({
      login: '',
      password: ''
    });
  }

  ngOnInit(): void {
  }

  loginProcess(userLoginInfo: UserLoginInfo) {
    console.log(userLoginInfo);
    this.authService.login(userLoginInfo).subscribe(token => {
        localStorage.setItem('token', 'Bearer ' + token);
        this.dataSharingService.isUserLoggedIn.next(true);
        this.router.navigate(['/']);
      },
      error1 => {
        this.errorMessage = 'Bad credentials, try again';
      });
  }

}
