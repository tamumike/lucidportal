import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';
import { catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Injectable()
export class UserResolver implements Resolve<any> {
    constructor(private userService: UserService,
        private alertify: AlertifyService,
        private router: Router) {}

        resolve(route: ActivatedRouteSnapshot): Observable<any> {
            return this.userService.getUser().pipe(
                catchError(error => {
                    this.alertify.error('Problem retrieve username');
                    this.router.navigate(['/comment-list']);
                    return of(null);
                })
            );
        }
}