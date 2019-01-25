import {Component, Input, OnInit} from '@angular/core';
import {LegionComment} from '../timeline/timeline.component';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comment: LegionComment;

  constructor() {
  }

  ngOnInit() {
  }

}
