import { combineReducers } from "redux";
import airportSearchReducer from "./airportSearchReducer";
import airportListReducer from "./airportListsReducer";
import userAuthReducer from "./userAuthReducer";
import showWeatherReducer from "./showWeatherReducer";

const rootReducer = combineReducers({
  airportSearch: airportSearchReducer,
  airportLists: airportListReducer,
  userReducer: userAuthReducer,
  airportWeather: showWeatherReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
