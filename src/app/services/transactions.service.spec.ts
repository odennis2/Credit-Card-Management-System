import { TestBed } from '@angular/core/testing';

import { TransactionsService } from './transactions.service';

describe('TransactionsListService', () => {
  let service: TransactionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransactionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
