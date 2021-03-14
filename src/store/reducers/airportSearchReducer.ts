import { ActionType } from "../actions";
import { Action } from "../actions";
import { Airport } from "../airports/types";

interface AirportsSearchState {
  loading: boolean;
  error: String | null;
  data: Airport[];
}

const initialState: AirportsSearchState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (
  state: AirportsSearchState = initialState,
  action: Action
): AirportsSearchState => {
  switch (action.type) {
    case ActionType.SEARCH_FOR_AIRPORTS:
      return { ...state, loading: true };
    case ActionType.SEARCH_FOR_AIRPORTS_SUCCESS:
      return { ...state, data: action.payload, loading: false };
    case ActionType.ADD_AIRPORT_TO_AIRPORTLIST_ERROR:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default reducer;
