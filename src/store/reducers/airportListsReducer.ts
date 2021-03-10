import { ActionType } from "../actions";
import { Action } from "../actions";
import { AirportList } from "../airports/types";

interface AirportListState {
  allAirportLists: AirportList[];
  loading: boolean;
  error: string | null;
  selectedList: AirportList | null;
}

const initialState: AirportListState = {
  allAirportLists: [],
  loading: false,
  error: null,
  selectedList: null,
};

const reducer = (state = initialState, action: Action): AirportListState => {
  switch (action.type) {
    case ActionType.GET_AIRPORT_LISTS:
      return { ...state, loading: true };
    case ActionType.GET_AIRPORT_LISTS_SUCCESS:
      return {
        ...state,
        allAirportLists: action.payload,
        loading: false,
      };
    case ActionType.SELECT_AIRPORT_LIST:
      return { ...state, selectedList: action.payload };
    default:
      return state;
  }
};

export default reducer;
