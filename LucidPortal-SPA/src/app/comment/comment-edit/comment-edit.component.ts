import { Component, OnInit } from '@angular/core';
import { Comment } from '../../_models/comment';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from 'src/app/_services/comment.service';

@Component({
  selector: 'app-comment-edit',
  templateUrl: './comment-edit.component.html',
  styleUrls: ['./comment-edit.component.css']
})
export class CommentEditComponent implements OnInit {
  comment: Comment;

  constructor(private route: ActivatedRoute, private commentService: CommentService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.comment = data['comment'];
    });
  }

  // loadComment() {
  //   this.commentService.getComment(+this.route.snapshot.params['id']).subscribe((comment: Comment) => {
  //     this.comment = comment;
  //   }, error => {
  //     console.log(error);
  //   });
  // }

}
