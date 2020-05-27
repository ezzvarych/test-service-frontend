import {ErrorHandler, Injectable} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  localStorage = localStorage;

  constructor(private location: Location, private router: Router) {
  }

  handleError(error: Response): void {
    console.log('Error: ' + error);
    const allowedUrlList = ['/', '/login', 'register'];
    if (error.status === 403 && !allowedUrlList.includes(this.location.path())) {
      console.log('Clear storage');
      this.router.navigate(['/login']);
      this.localStorage.clear();
      return;
    }
  }
}
