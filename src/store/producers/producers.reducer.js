import { PRODUCERS_ACTION_TYPES } from "./producers.types";

const INITIAL_STATE = {
  producers: [],
};

export const producersReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case PRODUCERS_ACTION_TYPES.SET_PRODUCERS:
      return { ...state, producers: payload };
    default:
      return state;
  }
};
