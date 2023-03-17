export type ActionPrefixesToCheck = 'openHours';

export interface RequestState {
  isLoading: boolean;
  isLoaded: boolean;
}

export interface LoadingState {
  openHours: RequestState;
}
