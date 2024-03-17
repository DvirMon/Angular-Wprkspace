import { AuthServerError, User } from "../utils/auth.model";

export const authFeatureKey = "auth";

export interface AuthState {
  user: User;
  loaded: boolean;
  email: string;
  serverError: AuthServerError | null;
}

export const initialState: AuthState = {
  user: {} as User,
  loaded: false,
  email: "",
  serverError: null,
};
