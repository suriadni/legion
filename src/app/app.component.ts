import {Component} from '@angular/core';
import {UserService} from './services/userService';
import {TimeLineService} from './services/timeLineService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'legion';


  constructor(public userService: UserService, public timeLineService: TimeLineService) {
  }
}
