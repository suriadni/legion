import {Injectable} from '@angular/core';
import {Timeline} from '../timeline/timeline.component';
import {UserService} from './userService';

@Injectable()
export class TimeLineService {
  timeLine: Timeline;


  constructor(public userService: UserService) {
    this.timeLine = new Timeline(this.userService);
  }

}
