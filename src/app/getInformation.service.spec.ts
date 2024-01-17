import { TestBed } from '@angular/core/testing';

import { GetInformationService } from './Services/getInformation.service';

describe('TempServiceService', () => {
  let service: GetInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
