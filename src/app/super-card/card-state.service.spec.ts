import { TestBed } from '@angular/core/testing';

import { CardStateService } from './card-state.service';

describe('CardStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardStateService = TestBed.get(CardStateService);
    expect(service).toBeTruthy();
  });
});
