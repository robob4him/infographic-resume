import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NutshellComponent } from './nutshell.component';

describe('NutshellComponent', () => {
  let component: NutshellComponent;
  let fixture: ComponentFixture<NutshellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutshellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NutshellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
