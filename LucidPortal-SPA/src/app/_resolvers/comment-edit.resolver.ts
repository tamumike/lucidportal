import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { CommentService } from '../_services/comment.service';
import { AlertifyService } from '../_services/alertify.service';
import { catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { Comment } from '../_models/comment';

@Injectable()
export class CommentEditResolver implements Resolve<Comment> {

    constructor(private commentService: CommentService,
        private alertify: AlertifyService,
        private router: Router) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Comment> {
        return this.commentService.getComment(route.params['id']).pipe(
            catchError(error => {
                this.alertify.error('Problem retrieving data');
                this.router.navigate(['/comment-list']);
                return of(null);
            })
        );
    }

}
