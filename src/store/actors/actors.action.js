import { createAction } from "../../config/reducer.utils";
import { ACTORS_ACTION_TYPES } from "./actors.types";

export const setActors = (actors) =>
  createAction(ACTORS_ACTION_TYPES.SET_ACTORS, actors);
