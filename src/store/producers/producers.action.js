import { createAction } from "../../config/reducer.utils";
import { PRODUCERS_ACTION_TYPES } from "./producers.types";

export const setProducers = (producers) =>
  createAction(PRODUCERS_ACTION_TYPES.SET_PRODUCERS, producers);
