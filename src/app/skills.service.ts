import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SkillsService {

  constructor() { }

  fetch(): Observable<Array<Skill>> {
    return Observable.of(
      [
        {
          text: 'Communication',
          size: 16,
        },
        {
          text: 'Problem Solving',
          size: 20,
        },
        {
          text: 'Soft Skills',
          size: 15,
        },
        {
          text: 'Academic',
          size: 10,
        },
        {
          text: 'Team Player',
          size: 12,
        },
        {
          text: 'Agile',
          size: 10,
        },
        {
          text: 'Customer-focused',
          size: 15,
        },
        {
          text: 'Forward-thinking',
          size: 15,
        },
        {
          text: 'Hard-working',
          size: 15,
        },
        {
          text: 'Self-motivated',
          size: 12,
        },
        {
          text: 'Creative',
          size: 10,
        },
        {
          text: 'Visionary',
          size: 12,
        },
        {
          text: 'Detail-oriented',
          size: 12,
        },
      ]
    );
  }

}

export class Skill {
  text: string;
  size: number;
}