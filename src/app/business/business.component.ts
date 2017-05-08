import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../history.service';
import { Observable } from 'rxjs/Observable';

export type BusinessRecord = [string, number];

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss'],
  providers: [HistoryService],
})
export class BusinessComponent implements OnInit {
  history: Observable<BusinessRecord[]>;

  constructor(private historyService: HistoryService) { }

  ngOnInit() {
    this.history = this.historyService.fetch()
      .map(employers => {
        const map = new Map<string, BusinessRecord>();

        employers.forEach(e => {
          if (!e.end) {
            e.end = new Date();
          }

          const length = e.end.getTime() - e.start.getTime();
          if (map.has(e.category)) {
            map.get(e.category)[1] += length;
          } else {
            map.set(e.category, [e.category, length]);
          }
        });

        return Array.from(map.values());
      });
  }

}
