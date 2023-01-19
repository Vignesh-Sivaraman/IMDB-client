import { combineReducers } from "redux";

import { moviesReducer } from "./store/movies/movies.reducer";

export const rootReducer = combineReducers({
  movies: moviesReducer,
});
