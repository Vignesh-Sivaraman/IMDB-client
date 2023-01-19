import { combineReducers } from "redux";
import { actorsReducer } from "./store/actors/actors.reducer";

import { moviesReducer } from "./store/movies/movies.reducer";
import { producersReducer } from "./store/producers/producers.reducer";

export const rootReducer = combineReducers({
  movies: moviesReducer,
  producers: producersReducer,
  actors: actorsReducer,
});
