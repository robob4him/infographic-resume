import { Component, OnInit } from '@angular/core';
import { HistoryService, Employer } from '../history.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.css'],
  providers: [HistoryService],
})
export class EmploymentComponent implements OnInit {
  employment: Observable<Array<Employer>>;

  constructor(public history: HistoryService) { }

  ngOnInit() {
    this.employment = this.history.fetch();
  }

}
