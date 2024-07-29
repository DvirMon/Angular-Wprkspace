import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

performance.mark('start-loading');

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err))
  .then(() => {
    performance.mark('end-loading');
    performance.measure('app-loading-time', 'start-loading', 'end-loading');
    const measure = performance.getEntriesByName('app-loading-time')[0];
    console.log(`App loading time with lazy loading: ${measure.duration}ms`);
  });
