import { Airport, AirportList } from "../airports/types";

export enum ActionType {
  SEARCH_FOR_AIRPORTS = "search_for_airport",
  SEARCH_FOR_AIRPORTS_SUCCESS = "search_for_airports_success",
  GET_AIRPORT_LISTS = "get_airport_lists",
  GET_AIRPORT_LISTS_SUCCESS = "get_airport_lists_success",
  SELECT_AIRPORT_LIST = "select_airport_list",
}

export interface SearchForAirportsAction {
  type: ActionType.SEARCH_FOR_AIRPORTS;
  payload: string;
}

export interface SearchForAirportsSucess {
  type: ActionType.SEARCH_FOR_AIRPORTS_SUCCESS;
  payload: Airport[];
}

export interface GetAllAirportLists {
  type: ActionType.GET_AIRPORT_LISTS;
  payload: string;
}

export interface GetAllAirportListsSuccess {
  type: ActionType.GET_AIRPORT_LISTS_SUCCESS;
  payload: AirportList[];
}

export interface SelectAirportList {
  type: ActionType.SELECT_AIRPORT_LIST;
  payload: AirportList;
}

export type Action =
  | SearchForAirportsAction
  | SearchForAirportsSucess
  | GetAllAirportLists
  | GetAllAirportListsSuccess
  | SelectAirportList;
