import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesPageComponent } from './places.component';

describe('PlacesPageComponent', () => {
  let component: PlacesPageComponent;
  let fixture: ComponentFixture<PlacesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PlacesPageComponent]
    });
    fixture = TestBed.createComponent(PlacesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
