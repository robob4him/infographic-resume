import { TestBed, inject } from '@angular/core/testing';

import { EducationService } from './education.service';

describe('EducationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EducationService]
    });
  });

  it('should ...', inject([EducationService], (service: EducationService) => {
    expect(service).toBeTruthy();
  }));
});
