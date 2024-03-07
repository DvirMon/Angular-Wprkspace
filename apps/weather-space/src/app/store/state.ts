
export interface AppState {
  isMetric: boolean;
  geolocation: boolean;
  searchTerm : string,
  selectId : number,
}

export const initialState: AppState = {
  isMetric: true,
  geolocation: true,
  searchTerm: "tel aviv",
  selectId : 1
};
