import { ActionType } from "../action-types";
import { Airport } from "../airports/types";

export interface SearchForAirportsAction {
  type: ActionType.SEARCH_FOR_AIRPORTS;
  payload: String;
}

export interface SearchForAirportsSucess {
  type: ActionType.SEARCH_FOR_AIRPORTS_SUCCESS;
  payload: Airport[];
}

export type Action = SearchForAirportsAction | SearchForAirportsSucess;
