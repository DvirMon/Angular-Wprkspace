import { AuthEvent, User, mapAuthServerError } from '../utils';
import { AuthState } from './auth.state';

export function setUser(user: User): Partial<AuthState> {
  return { user, loaded: true };
}

export function setServerError(
  code: string,
  event: AuthEvent
): Partial<AuthState> {
  const serverError = mapAuthServerError(code, event);
  return { serverError };
}
