import {Component, Input, OnInit} from '@angular/core';
import {Post, Timeline} from '../../timeline/timeline.component';
import {UserService} from '../../services/userService';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  @Input() timeLine: Timeline;

  newPost: Post;

  constructor(public userService: UserService) {
  }

  ngOnInit() {
    this.newPost = new Post(this.userService);
  }

}
