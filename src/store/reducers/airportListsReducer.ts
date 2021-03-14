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
        selectedList: action.payload[0],
      };
    case ActionType.SELECT_AIRPORT_LIST:
      return { ...state, selectedList: action.payload };
    case ActionType.ADD_AIRPORT_TO_AIRPORTSLIST:
      return { ...state, loading: true };
    case ActionType.ADD_AIRPORT_TO_AIRPORTLIST_SUCCESS:
      return {
        ...state,
        loading: false,
        selectedList: action.payload,
        allAirportLists: state.allAirportLists.map((airportList) => {
          if (airportList.id === action.payload.id) {
            return action.payload;
          }
          return airportList;
        }),
      };
    case ActionType.DELETE_AIRPORT_FROM_AIRPORTLIST:
      return { ...state, loading: true };
    case ActionType.DELETE_AIRPORT_FROM_AIRPORTLIST_SUCCESS:
      return {
        ...state,
        loading: false,
        selectedList: action.payload,
        allAirportLists: state.allAirportLists.map((airportList) => {
          if (airportList.id === action.payload.id) {
            return action.payload;
          }
          return airportList;
        }),
      };
    default:
      return state;
  }
};

export default reducer;
