import { AuthEvent, User, mapAuthServerError } from '../utils';
import { AuthState } from './store';

export function setUser(user: User): Partial<AuthState> {
  return { user, loaded: true };
}


export function setAuthError(
  code: string,
  event: AuthEvent
): Partial<AuthState> {
  const { control, message } = mapAuthServerError(code, event);
  return { authError: { [event]: { message, control } } };
}