import { Component, OnInit } from '@angular/core';
import { SkillsService, Skill } from '../skills.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  providers: [SkillsService],
})
export class SkillsComponent implements OnInit {
  public skills: Observable<Skill[]>;

  constructor(private skillService: SkillsService) { }

  ngOnInit() {
    this.skills = this.skillService.fetch();
  }

}
