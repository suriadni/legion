import {Component, Input, OnInit} from '@angular/core';
import {User, UserService} from '../services/userService';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})

export class TimelineComponent implements OnInit {
  @Input() timeLine: Timeline;


  newPost: Post;

  constructor(public userService: UserService) {
  }

  ngOnInit() {
    this.newPost = new Post(this.userService);
  }

}

export class Post {
  owner: User;
  content: String;
  title: String;
  comments: LegionComment[] = [];
  timeLine: Timeline;
  imageUrl: String;
  receiver: User;


  id: String;


  constructor(public userService: UserService) {
    this.id = Math.random().toString(36).substr(2, 9);

    this.owner = this.userService.loggedInUser;
  }

  addComment(comment: LegionComment) {
    const commentTmp: LegionComment = new LegionComment();
    commentTmp.owner = this.userService.loggedInUser;
    commentTmp.title = comment.title;
    commentTmp.post = this;
    commentTmp.content = comment.content;

    this.comments.push(commentTmp);
  }

  deleteComment(id: String) {
    let commentToRemove: LegionComment = new LegionComment();

    this.comments.forEach(comment => {
      if (comment.id === id) {
        commentToRemove = comment;
      } else {
        alert('No comment found!!!!!!!');
      }
    });

    const indexToRemove: number = this.comments.indexOf(commentToRemove);
    this.comments.splice(indexToRemove, 1);
  }

  deleteCommentShort(id: String) {
    this.comments = this.comments.filter(comment => comment.id !== id);
  }
}

export class LegionComment {
  id: String;
  title: String;
  owner: User;
  post: Post;
  content: String;

}

export class Timeline {
  posts: Post[] = [];

  postCreatePanelExpanded = false;

  constructor(public userService: UserService) {
  }


  addPost(post: Post): void {
    const tmpPost = new Post(this.userService);

    tmpPost.title = post.title;
    tmpPost.content = post.content;
    tmpPost.imageUrl = post.imageUrl;
    tmpPost.receiver = post.receiver;
    tmpPost.owner = this.userService.loggedInUser;

    this.posts.push(tmpPost);
    this.userService.loggedInUser.posts.push(tmpPost);
    this.postCreatePanelExpanded = false;

  }

  deletePost(id: String) {
    let postToRemove: Post = null;

    this.posts.forEach(post => {
      if (post.id === id) {
        postToRemove = post;
      } else {
        alert('No Post found!!!!!!!');
      }
    });

    const indexToRemove: number = this.posts.indexOf(postToRemove);
    this.posts.splice(indexToRemove, 1);
  }

  deletePostShort(id: String) {
    this.posts = this.posts.filter(post => post.id !== id);
  }

  deleteAllPosts() {
    this.posts = [];
  }
}



