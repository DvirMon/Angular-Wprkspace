import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookshelfPageComponent } from './basket.component';

describe('BookshelfPageComponent', () => {
  let component: BookshelfPageComponent;
  let fixture: ComponentFixture<BookshelfPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BookshelfPageComponent],
    });
    fixture = TestBed.createComponent(BookshelfPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
