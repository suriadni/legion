import {Component, Input, OnInit} from '@angular/core';
import {LegionComment, Post} from '../../timeline/timeline.component';

@Component({
  selector: 'app-comment-create',
  templateUrl: './comment-create.component.html',
  styleUrls: ['./comment-create.component.css']
})
export class CommentCreateComponent implements OnInit {
  @Input() post: Post;

  newComment: LegionComment;

  constructor() {
  }

  ngOnInit() {
    this.newComment = new LegionComment();
  }

}
