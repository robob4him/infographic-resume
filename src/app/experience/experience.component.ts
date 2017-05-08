import { Component, OnInit } from '@angular/core';
import { HistoryService, Employer } from '../history.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  providers: [HistoryService],
})
export class ExperienceComponent implements OnInit {
  totalExperience: number = 0;
  leadExperience: number = 0;

  constructor(private history: HistoryService) { }

  ngOnInit() {
    const year = (r: Employer): number => {
      if (!r.hasOwnProperty('end')) {
        r.end = new Date();
      }

      return Math.floor(((r.end as any) - (r.start as any)) / 31536000000)
    };
    const senior = new RegExp(/[sS]enior/);
    this.history.fetch().subscribe(records => {
      this.totalExperience = records.reduce((v, r) => v + year(r), 0);
      this.leadExperience = records
        .filter(r => senior.test(r.level))
        .reduce((v, r) => v + year(r), 0);
    });
  }

}
