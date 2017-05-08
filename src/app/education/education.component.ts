import { Component, OnInit } from '@angular/core';
import { EducationService, Education } from '../education.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  providers: [EducationService],
})
export class EducationComponent implements OnInit {
  educationHistory: Observable<Array<Education>>;

  constructor(private education: EducationService) { }

  ngOnInit() {
    this.educationHistory = this.education.fetch();
  }

}
