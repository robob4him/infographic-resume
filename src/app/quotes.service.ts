import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class QuotesService {

  constructor() { }

  fetch(): Observable<Quote[]> {
    return Observable.of(
      [
        {
          by: 'Ryan Bauer (Co-Worker)',
          quote: 'Rob is a detail-oriented and dependable software engineer who has a willingness to learn. Whether the task involves designing or building a solution Rob brings a passion and excellent level of knowledge to each project.',
          when: new Date('2017-04-21 21:55:00'),
        },
        {
          by: 'Russ Miller (Manager)',
          quote: 'Rob takes a great deal of pride in what he does and he works very hard to achieve and exceed the results that the customer is looking for.',
          when: new Date('2017-04-19 12:52:09'),
        },
        {
          by: 'Tyler Northrup (Senior Director)',
          quote: '[Robert is] an incredible asset to the Society and our App Dev team. This is something I have heard consistently from both Russ (manager) and Joe (director) and experienced myself through interactions we have had.',
          when: new Date('2017-01-05 16:30:00'),
        }
      ]
    )
  }

}


export class Quote {
  by: string;
  quote: string;
  when: Date;
}