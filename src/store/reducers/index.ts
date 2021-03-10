import { combineReducers } from "redux";
import airportSearchReducer from "./airportSearchReducer";
import airportListReducer from "./airportListsReducer";

const rootReducer = combineReducers({
  airportSearch: airportSearchReducer,
  airportLists: airportListReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
