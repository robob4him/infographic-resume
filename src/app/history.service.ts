import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class HistoryService {

  constructor() { }

  public fetch(): Observable<Employer[]> {
    return Observable.of(
      [
        {
          name: 'Evangelical Lutheran Good Samaritan Society',
          category: 'Healthcare',
          level: 'Senior Software Analyst',
          start: new Date('2015-07-01'),
          languages: [
            'PHP',
            'Typescript',
            'Javascript',
            'SQL',
          ],
          frameworks: [
            'AngularJS',
            'Zend Framework',
            'SaltStack',
            'Vagrant',
            'Docker',
            'RabbitMQ',
          ],
          systems: [
            'Debian Linux'
          ]
        }, {
          name: 'Evangelical Lutheran Good Samaritan Society',
          category: 'Healthcare',
          level: 'Software Analyst I & II',
          start: new Date('2010-09-01'),
          end: new Date('2015-07-01'),
          languages: [
            'PHP',
            'Javascript',
            'Java',
            'Visual Basic',
            'SQL',
          ],
          frameworks: [
            'Zend Framework',
            'jQuery',
          ],
          systems: [
            'iSeries',
            'Debian Linux',
          ]
        }, {
          name: 'Meta Payment Systems',
          category: 'Banking',
          level: 'Application Support I',
          start: new Date('2009-02-01'),
          end: new Date('2010-09-01'),
          languages: [
            'VBscript',
            'C#',
            'ASP.Net'
          ]
        }, {
          name: 'DocuTAP',
          category: 'Healthcare',
          level: 'Junior Software Developer',
          start: new Date('2007-07-01'),
          end: new Date('2009-02-01'),
          languages: [
            'Progress 4GL',
            'C#'
          ]
        }
      ]
    );
  }

}

export class Employer {
  name: string;
  category: string;
  level: string;
  start: Date;
  end?: Date;
  languages: Array<string>;
  frameworks?: Array<string>;
  systems?: Array<string>;
}