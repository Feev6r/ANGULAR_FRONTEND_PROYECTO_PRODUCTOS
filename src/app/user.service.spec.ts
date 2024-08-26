import { TestBed } from '@angular/core/testing';

import { UserService } from './Services/ReqRepository/userReq.service';

describe('CommunicationService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
