import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {UserService} from '../../../../services/auth/user.service';
import {Role} from '../../../../model/user/role.enum';
import {UserRegisterInfo} from '../../../../model/user/user-register-info';
import {Router} from '@angular/router';
import {Rol} from '../../../../model/user/rol';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  submitted = false;
  loading = false;
  registrationForm;
  enumValues: string[];
  role = Role;

  roles = Rol;

  errorMessage?: string;

  constructor(private authService: UserService, private formBuilder: FormBuilder, private router: Router) {
    this.registrationForm = this.formBuilder.group({
      login: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      role: [Role.STUDENT, [Validators.required]],
      realName: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.enumValues = Object.values(this.role).filter(r => r !== this.role.ADMIN);
  }

  onSubmit(userInfo: UserRegisterInfo) {
    this.submitted = true;
    if (this.registrationForm.invalid) {
      return;
    }
    this.loading = true;
    console.log(userInfo);
    this.authService.register(userInfo).subscribe(next => {
        this.router.navigate(['/login']);
      },
      (error1: any) => {
        this.errorMessage = error1.error.message;
        this.loading = false;
      });
  }

  get f() { return this.registrationForm.controls; }


}
