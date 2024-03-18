import { FormServerError } from "../../shared/components";
import { AuthEvent, User } from "../utils/auth.model";

export const authFeatureKey = "auth";

export interface AuthState {
  user: User;
  loaded: boolean;
  email: string;
  authError: Partial<Record<AuthEvent, FormServerError>>;
}

export const initialState: AuthState = {
  user: {} as User,
  loaded: false,
  email: '',
  authError: {} as Record<AuthEvent, FormServerError>,
};