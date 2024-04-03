import { HttpContextToken } from '@angular/common/http';

export const ERROR_MESSAGE_CONTEXT = new HttpContextToken(
  () =>
    'Apologies, an unexpected issue has occurred on our end. Please try again later'
);
