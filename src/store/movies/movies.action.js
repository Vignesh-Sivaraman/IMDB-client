import { createAction } from "../../config/reducer.utils";
import { MOVIES_ACTION_TYPES } from "./movies.types";

export const setMovies = (movies) =>
  createAction(MOVIES_ACTION_TYPES.SET_MOVIES, movies);
