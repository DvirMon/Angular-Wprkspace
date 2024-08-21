import { TestBed } from '@angular/core/testing';

import { PlaceFormService } from '../../place-form/place-form.service';

describe('PlaceFormService', () => {
  let service: PlaceFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaceFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
