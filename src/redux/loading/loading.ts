import {Action} from '@reduxjs/toolkit';
import {
  isFulfilledAction,
  isPendingAction,
  isRejectedAction,
} from './helpers/actionHelper';
import {ActionPrefixesToCheck, LoadingState} from './types';

const initialState: LoadingState = {
  openHours: {isLoaded: false, isLoading: false},
};

// list of reducer names to save loading states for
const actionPrefixedToCheck: Array<ActionPrefixesToCheck> = ['openHours'];

// Every redux action runs in this loadingReducer / function
function loadingReducer(
  state = initialState,
  {type: actionType}: Action<string>,
): LoadingState {
  const isPending = isPendingAction(actionType);
  const isFulfilled = isFulfilledAction(actionType);
  const isRejected = isRejectedAction(actionType);

  // only handle pending, fulfilled, rejected actions
  // other actions will be ignored
  if (!isPending && !isFulfilled && !isRejected) {
    return state;
  }

  // Find out which reducer the action is coming from
  let newState: LoadingState | null = null;
  const foundPrefix: keyof LoadingState | undefined =
    actionPrefixedToCheck.find(prefix => actionType.startsWith(`${prefix}/`));

  if (typeof foundPrefix !== 'string') {
    return state;
  }

  // This results in a new loading state e.g. { ..., user: { loading: true, isLoaded: false }, ...}
  // Depending on the action
  newState = {
    ...state,
    [foundPrefix]: {
      isLoading: isPending,
      isLoaded: isFulfilled ? isFulfilled : !!state[foundPrefix]?.isLoaded,
    },
  };

  if (newState) {
    return newState;
  }

  return state;
}

export default loadingReducer;
