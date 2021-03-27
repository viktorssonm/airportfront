import { combineReducers } from "redux";
import airportSearchReducer from "./airportSearchReducer";
import airportListReducer from "./airportListsReducer";
import userAuthReducer from "./userAuthReducer";

const rootReducer = combineReducers({
  airportSearch: airportSearchReducer,
  airportLists: airportListReducer,
  userReducer: userAuthReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
