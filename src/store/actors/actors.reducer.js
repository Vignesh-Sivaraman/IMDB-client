import { ACTORS_ACTION_TYPES } from "./actors.types";

const INITIAL_STATE = {
  actors: [],
};

export const actorsReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTORS_ACTION_TYPES.SET_ACTORS:
      return { ...state, actors: payload };
    default:
      return state;
  }
};
