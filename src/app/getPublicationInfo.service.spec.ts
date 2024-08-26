import { TestBed } from '@angular/core/testing';

import { ProductsReqService } from './Services/ReqRepository/productsReq.service';

describe('TempServiceService', () => {
  let service: ProductsReqService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsReqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
