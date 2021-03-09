import { combineReducers } from "redux";
import airportSearchReducer from "./airportSearchReducer";

const reducers = combineReducers({
  airportSearch: airportSearchReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
