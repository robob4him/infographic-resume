import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { HeaderComponent } from './header/header.component';
import { EmploymentComponent } from './employment/employment.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { LanguagesComponent } from './languages/languages.component';
import { InterestsComponent } from './interests/interests.component';
import { QuotationsComponent } from './quotations/quotations.component';
import { BasicsComponent } from './basics/basics.component';
import { NutshellComponent } from './nutshell/nutshell.component';
import { PhoneComponent } from './header/phone/phone.component';
import { EmailComponent } from './header/email/email.component';
import { ToolsComponent } from './tools/tools.component';
import { SiteComponent } from './header/site/site.component';
import { SkillsComponent } from './skills/skills.component';
import { BusinessComponent } from './business/business.component';
import { ArcComponent } from './graph/arc/arc.component';
import { D3Service } from 'd3-ng2-service';
import { BarComponent } from './graph/bar/bar.component';
import { CloudComponent } from './graph/cloud/cloud.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    HeaderComponent,
    EmploymentComponent,
    ExperienceComponent,
    EducationComponent,
    LanguagesComponent,
    InterestsComponent,
    QuotationsComponent,
    BasicsComponent,
    NutshellComponent,
    PhoneComponent,
    EmailComponent,
    ToolsComponent,
    SiteComponent,
    SkillsComponent,
    BusinessComponent,
    ArcComponent,
    BarComponent,
    CloudComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [D3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
