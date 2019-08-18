import { TestBed } from '@angular/core/testing';

import { CheckboxMcqService } from './checkbox-mcq.service';

describe('CheckboxMcqService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CheckboxMcqService = TestBed.get(CheckboxMcqService);
    expect(service).toBeTruthy();
  });
});
