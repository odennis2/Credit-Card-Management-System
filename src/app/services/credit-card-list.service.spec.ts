import { TestBed } from '@angular/core/testing';

import { CreditCardListService } from './credit-card-list.service';

describe('CreditCardListService', () => {
  let service: CreditCardListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreditCardListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
