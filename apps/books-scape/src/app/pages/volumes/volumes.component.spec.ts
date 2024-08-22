import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VolumesPageComponent } from './volumes.component';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { appRoutes } from '../../app.routes';

describe('VolumesPageComponent', () => {
  let component: VolumesPageComponent;
  let fixture: ComponentFixture<VolumesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [VolumesPageComponent],
      providers: [
        provideHttpClient(),
        provideAnimations(),
        provideRouter(appRoutes),
      ],
    });
    fixture = TestBed.createComponent(VolumesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
