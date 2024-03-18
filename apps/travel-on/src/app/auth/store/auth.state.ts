import { FormServerError } from "@dom/components";
import { AuthEvent, User } from "../utils/auth.model";

export const authFeatureKey = "auth";

export interface AuthState {
  user: User;
  loaded: boolean;
  authError: Partial<Record<AuthEvent, FormServerError>>;
}

export const initialState: AuthState = {
  user: {} as User,
  loaded: false,
  authError: {} as Record<AuthEvent, FormServerError>,
};