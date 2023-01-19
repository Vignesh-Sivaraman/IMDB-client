import { MOVIES_ACTION_TYPES } from "./movies.types";

const INITIAL_STATE = {
  movies: [],
};

export const moviesReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case MOVIES_ACTION_TYPES.SET_MOVIES:
      return { ...state, movies: payload };
    default:
      return state;
  }
};
