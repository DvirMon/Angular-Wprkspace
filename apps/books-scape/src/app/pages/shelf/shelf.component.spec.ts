import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelfPageComponent } from './basket.component';

describe('ShelfPageComponent', () => {
  let component: ShelfPageComponent;
  let fixture: ComponentFixture<ShelfPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ShelfPageComponent],
    });
    fixture = TestBed.createComponent(ShelfPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
