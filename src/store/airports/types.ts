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
