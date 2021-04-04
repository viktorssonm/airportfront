import { WeatherReport } from "../airports/types";
import { Action, ActionType } from "../actions";

interface showWeatherReducerState {
  loading: boolean;
  error: String | null;
  data: WeatherReport[];
}

const initialState: showWeatherReducerState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (
  state: showWeatherReducerState = initialState,
  action: Action
) => {
  switch (action.type) {
    case ActionType.GET_WEATHER_FOR_LIST:
      return { ...state, loading: true };
    case ActionType.GET_WEATHER_FOR_LIST_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case ActionType.GET_WEATHER_FOR_LIST_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default reducer;
