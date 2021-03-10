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
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_FOR_AIRPORTS_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    default:
      return state;
  }
};

export default reducer;
