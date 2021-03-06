import { Airport, AirportList, User, WeatherReport } from "../airports/types";

export enum ActionType {
  SEARCH_FOR_AIRPORTS = "search_for_airport",
  SEARCH_FOR_AIRPORTS_SUCCESS = "search_for_airports_success",
  SEARCH_FOR_AIRPORTS_ERROR = "search_for_airports_error",
  ADD_AIRPORT_LIST = "add_airport_list",
  ADD_AIRPORT_LIST_SUCCESS = "add_airport_list_success",
  ADD_AIRPORT_LIST_ERROR = "add_airport_list_error",
  GET_AIRPORT_LISTS = "get_airport_lists",
  GET_AIRPORT_LISTS_SUCCESS = "get_airport_lists_success",
  GET_AIRPORT_LISTS_ERROR = "get_airport_lists_error",
  SELECT_AIRPORT_LIST = "select_airport_list",
  ADD_AIRPORT_TO_AIRPORTSLIST = "add_airport_to_airport_list",
  ADD_AIRPORT_TO_AIRPORTLIST_SUCCESS = "add_airport_to_airport_list_success",
  ADD_AIRPORT_TO_AIRPORTLIST_ERROR = "add_airport_to_airport_list_error",
  DELETE_AIRPORT_FROM_AIRPORTLIST = "delete_airport_from_airport_list",
  DELETE_AIRPORT_FROM_AIRPORTLIST_SUCCESS = "delete_airport_from_airport_list_success",
  DELETE_AIRPORT_FROM_AIRPORTLIST_ERROR = "delete_airport_from_airport_list_error",
  LOGIN_REQUEST = "login_request",
  LOGIN_SUCCESS = "login_success",
  LOGIN_ERROR = "login_error",
  LOGOUT = "logout",
  SIGNUP_USER_REQUEST = "signup_user_request",
  SIGNUP_USER_SUCCESS = "signup_user_success",
  SIGNUP_USER_ERROR = "signup_user_error",
  GET_WEATHER_FOR_LIST = "get_weather_for_list",
  GET_WEATHER_FOR_LIST_SUCCESS = "get_weather_for_list_success",
  GET_WEATHER_FOR_LIST_ERROR = "get_weather_for_list_error",
}

export interface SearchForAirportsAction {
  type: ActionType.SEARCH_FOR_AIRPORTS;
}

export interface SearchForAirportsSucess {
  type: ActionType.SEARCH_FOR_AIRPORTS_SUCCESS;
  payload: Airport[];
}

export interface SearchForAirportsError {
  type: ActionType.SEARCH_FOR_AIRPORTS_ERROR;
}

export interface GetAllAirportLists {
  type: ActionType.GET_AIRPORT_LISTS;
}

export interface GetAllAirportListsSuccess {
  type: ActionType.GET_AIRPORT_LISTS_SUCCESS;
  payload: AirportList[];
}

export interface GetAllAirportListsError {
  type: ActionType.GET_AIRPORT_LISTS_ERROR;
}

export interface SelectAirportList {
  type: ActionType.SELECT_AIRPORT_LIST;
  payload: AirportList;
}

export interface AddAirportToAirportList {
  type: ActionType.ADD_AIRPORT_TO_AIRPORTSLIST;
}

export interface AddAirportToAirportListSuccess {
  type: ActionType.ADD_AIRPORT_TO_AIRPORTLIST_SUCCESS;
  payload: AirportList;
}

export interface AddAirportToAirportListError {
  type: ActionType.ADD_AIRPORT_TO_AIRPORTLIST_ERROR;
}

export interface DeleteAirportFromAirportList {
  type: ActionType.DELETE_AIRPORT_FROM_AIRPORTLIST;
}

export interface DeleteAirportFromAirportListSuccess {
  type: ActionType.DELETE_AIRPORT_FROM_AIRPORTLIST_SUCCESS;
  payload: AirportList;
}

export interface DeleteAirportFromAirportListError {
  type: ActionType.DELETE_AIRPORT_FROM_AIRPORTLIST_ERROR;
}

export interface LoginUserRequest {
  type: ActionType.LOGIN_REQUEST;
}

export interface LoginUserRequestSucceded {
  type: ActionType.LOGIN_SUCCESS;
  payload: User;
}

export interface LoginUserRequestError {
  type: ActionType.LOGIN_ERROR;
  payload: string;
}

export interface LogoutUser {
  type: ActionType.LOGOUT;
}

export interface SignupUserRequest {
  type: ActionType.SIGNUP_USER_REQUEST;
}

export interface SignupUserRequestSuccess {
  type: ActionType.SIGNUP_USER_SUCCESS;
}

export interface SignupUserError {
  type: ActionType.SIGNUP_USER_ERROR;
}

export interface AddAirportList {
  type: ActionType.ADD_AIRPORT_LIST;
}

export interface AddAirportListSuccess {
  type: ActionType.ADD_AIRPORT_LIST_SUCCESS;
  payload: AirportList;
}

export interface AddAirportListError {
  type: ActionType.ADD_AIRPORT_LIST_ERROR;
  payload: String;
}

export interface GetWeatherForList {
  type: ActionType.GET_WEATHER_FOR_LIST;
}

export interface GetWeatherForListSuccess {
  type: ActionType.GET_WEATHER_FOR_LIST_SUCCESS;
  payload: WeatherReport[];
}

export interface GetWeatherForListError {
  type: ActionType.GET_WEATHER_FOR_LIST_ERROR;
  payload: string;
}

export type Action =
  | SearchForAirportsAction
  | SearchForAirportsSucess
  | SearchForAirportsError
  | GetAllAirportLists
  | GetAllAirportListsSuccess
  | GetAllAirportListsError
  | SelectAirportList
  | AddAirportList
  | AddAirportListSuccess
  | AddAirportListError
  | AddAirportToAirportList
  | AddAirportToAirportListSuccess
  | AddAirportToAirportListError
  | DeleteAirportFromAirportList
  | DeleteAirportFromAirportListSuccess
  | DeleteAirportFromAirportListError
  | LoginUserRequest
  | LoginUserRequestSucceded
  | LoginUserRequestError
  | LogoutUser
  | SignupUserRequest
  | SignupUserRequestSuccess
  | SignupUserError
  | GetWeatherForList
  | GetWeatherForListSuccess
  | GetWeatherForListError;
