import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EducationService {

  constructor() { }

  fetch(): Observable<Array<Education>> {
    return Observable.of(
      [
        {
          image: '/assets/education.png',
          college: 'Colorado Technical University',
          major: 'B.A. Computer Science',
        },
      ]
    );
  }

}

export class Education {
  image: string;
  college: string;
  major: string;
  minor?: string;
}