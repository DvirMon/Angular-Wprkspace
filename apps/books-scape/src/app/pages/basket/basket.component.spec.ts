import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketPageComponent } from './basket.component';

describe('BasketPageComponent', () => {
  let component: BasketPageComponent;
  let fixture: ComponentFixture<BasketPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BasketPageComponent],
    });
    fixture = TestBed.createComponent(BasketPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
