export interface AppState {
  metric: boolean;
  geolocation: boolean;
}

export const initialState: AppState = {
  metric: true,
  geolocation: true,
};
