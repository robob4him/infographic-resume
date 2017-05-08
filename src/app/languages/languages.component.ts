import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../history.service';
import { Observable } from 'rxjs/Observable';

export type LanguageEntry = [string, number];

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css'],
  providers: [HistoryService],
})
export class LanguagesComponent implements OnInit {
  languages: Observable<LanguageEntry[]>;

  constructor(private historyService: HistoryService) { }

  ngOnInit() {
    this.languages = this.historyService.fetch()
      .map(employers => {
        const map = new Map<string, LanguageEntry>();
        employers.forEach(e => {
          if (!e.end) {
            e.end = new Date();
          }

          let length = e.end.getTime() - e.start.getTime();
          length = Math.floor(length / 1000 / 60 / 60 / 24 / 365);

          e.languages.forEach(l => {
            if (!map.has(l)) {
              map.set(l, [l, length]);
            } else {
              map.get(l)[1] += length;
            }
          });
        });

        return Array.from(map.values())
          .sort((a, b) => a[1] > b[1] ? -1 : a[1] < b[1] ? 1 : 0);
      });
  }

}
