import { FormServerError } from "@dom/components";
import { AuthEvent, User } from "../utils/auth.model";

export interface AuthState {
  user: User;
  isLoaded: boolean;
  authError: Partial<Record<AuthEvent, FormServerError>>;
}

export const initialState: AuthState = {
  user: {} as User,
  isLoaded: false,
  authError: {} as Record<AuthEvent, FormServerError>,
};