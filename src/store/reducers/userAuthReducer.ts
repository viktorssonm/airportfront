import { Action, ActionType } from "../actions";
import { User } from "../airports/types";

interface userAuthState {
  loading: boolean;
  error: string | null;
  user: User | null;
}

const initialState: userAuthState = {
  loading: false,
  error: null,
  user: null,
};

const reducer = (
  state: userAuthState = initialState,
  action: Action
): userAuthState => {
  switch (action.type) {
    case ActionType.LOGIN_REQUEST:
      return { ...state, loading: true };
    case ActionType.LOGIN_SUCCESS:
      return { ...state, loading: false, user: action.payload };
    case ActionType.LOGIN_ERROR:
      return { ...state, loading: false, error: action.payload };
    case ActionType.SIGNUP_USER_REQUEST:
      return { ...state, loading: true };
    case ActionType.SIGNUP_USER_SUCCESS:
      return { ...state, loading: false };
    case ActionType.SIGNUP_USER_ERROR:
      return { ...state, loading: false };
    case ActionType.LOGOUT:
      return { ...state, user: null };
    default:
      return state;
  }
};

export default reducer;
