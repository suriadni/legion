import {Post, Timeline} from '../timeline/timeline.component';
import {Injectable} from '@angular/core';

@Injectable()
export class UserService {
  loggedInUser: User = new User();
  users: User[] = [];


  constructor() {
    console.log('Wir sind am bauen');

    const darius: User = new User();
    darius.name = 'Darius';
    darius.lastname = 'Grewe';
    darius.age = 15;

    this.users.push(darius);
    this.loggedInUser = darius;

    const ilja: User = new User();
    ilja.name = 'Ilja';
    ilja.lastname = 'Lichtenberg';
    ilja.age = 28;

    this.users.push(ilja);

    const kolja: User = new User();
    kolja.name = 'Kolja';
    kolja.lastname = 'Grewe';
    kolja.age = 12;

    this.users.push(kolja);

    const tanja: User = new User();
    tanja.name = 'Tanja';
    tanja.lastname = 'Kozlowski';
    tanja.age = 43;

    this.users.push(tanja);

    const heiko: User = new User();
    heiko.name = 'Heiko';
    heiko.lastname = 'Grewe';
    heiko.age = 50;

    this.users.push(heiko);

    console.log('So viele user haben wir nun: ' + this.users.length);
  }
}

export class User {
  name: String;
  lastname: String;
  age: number;
  friends: User[] = [];
  posts: Post[] = [];
  comments: Post[] = [];
  timeLine: Timeline;


  isAdult(): boolean {
    return this.age >= 18;
  }


}
