import { Component, OnInit, ViewChild } from '@angular/core';
import { CommentService } from '../../_services/comment.service';
import { HttpClient } from '@angular/common/http';
import { Router, } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { producers } from '../../base';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-comment-create',
  templateUrl: './comment-create.component.html',
  styleUrls: ['./comment-create.component.css']
})
export class CommentCreateComponent implements OnInit {
  @ViewChild('submitForm') formValues;
  baseUrl = environment.apiUrl;
  user: any;
  model: any = {};
  commentList: any = [];
  producerList = producers;
  clicked = false;

  constructor(private commentService: CommentService,
    private http: HttpClient, private router: Router,
    private alertify: AlertifyService) { }

  ngOnInit() {
  }

  submit() {
    this.clicked = true;
    this.commentService.submitMulti(this.commentList).subscribe(() => {
      this.router.navigate(['/comment-list']);
      this.alertify.success('Comment saved');
    }, error => {
      this.alertify.error('A comment for this Producer may already exist for today.');
    });
  }

  // getUser() {
  //   this.http.get(this.baseUrl + 'values/user', {responseType: 'text'}).subscribe(user => {
  //     this.user = user;
  //   }, error => {
  //     console.log(error);
  //   });
  // }

  add() {
    if ('producer' in this.model && 'content' in this.model) {
      const modelToAdd = Object.assign({}, this.model);
      if (!this.checkComments(modelToAdd.producer)) {
        this.commentList.push(modelToAdd);
        this.formValues.resetForm();
      } else {
        this.alertify.error('A comment for this producer has already been added.');
      }
    }
  }

  checkComments(producer: string) {
    for (let i = 0; i < this.commentList.length; i++) {
      if (this.commentList[i].producer === producer) {
        return true;
      }
    }
     return false;
  }

  removeComment(comment: any) {
    this.commentList = this.commentList.filter((x: any) => {
      return x !== comment;
    });
  }

  cancel() {
    this.router.navigate(['/comment-list']);
  }


}
