export const SEARCH_FOR_AIRPORT = "SEARCH_FOR_AIRPORT";

export interface Airport {
  id: Number;
  ident: string;
  type?: string;
  name?: string;
  isoCountry?: string;
  latitudeDeg?: Number;
  longitudeDeg?: Number;
  elevationFt?: Number;
  continent?: string;
  isoRegion?: string;
  municipality?: string;
  gpsCode: string;
  iataCode: string;
  localCode?: string;
  homeLink?: string;
  wikipediaLink?: string;
}

export interface AirportList {
  id: string;
  airports: Airport[];
  listName: string;
  createdAt: Date;
  changedAt: Date;
}

export interface SearchForAirport {
  SearchTerm: String;
}

export type AirportSearchState = {
  airports: Airport[];
};

export type SearchForAirportAction = {
  type: String;
  airports: Airport[];
};

export type SelectAirportList = {
  list: AirportList;
};

export type User = {
  displayName: String;
  token: String;
};

export type UserLoginRequest = {
  email: String;
  password: String;
};

export type SignupUserInfo = {
  email: String;
  password: String;
  displayName: String;
};
