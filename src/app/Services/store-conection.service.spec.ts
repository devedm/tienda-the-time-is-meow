import { TestBed } from '@angular/core/testing';

import { StoreConectionService } from './store-conection.service';

describe('StoreConectionService', () => {
  let service: StoreConectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreConectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
