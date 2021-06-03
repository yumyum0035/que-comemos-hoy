import { TestBed } from '@angular/core/testing';

import { StepsService } from './step.service';

describe('StepService', () => {
  let service: StepsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StepsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
