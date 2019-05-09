import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  comments: any;
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getComments();
  }

  getComments() {
    this.http.get(this.baseUrl + 'comment').subscribe(response => {
      this.comments = response;
    }, error => {
      console.log(error);
    });
  }

}
