import { TestBed } from '@angular/core/testing';

import { PlacesHttpService } from './places-http.service';

describe('PlacesHttpService', () => {
  let service: PlacesHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlacesHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
