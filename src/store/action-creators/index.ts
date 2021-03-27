import { ActionType } from "../actions";
import { Dispatch } from "redux";
import { Action } from "../actions";
import AuthService from "../../Services/auth.service";
import history from "../../Services/history";

import {
  Airport,
  AirportList,
  SignupUserInfo,
  UserLoginRequest,
} from "../airports/types";
import airportService from "../../Services/airport.service";

// Action creator for signup
export const signupUser = (userData: SignupUserInfo) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SIGNUP_USER_REQUEST,
    });
    try {
      const { status } = await AuthService.RegisterNewUser(userData);
      if (status === 200) {
        dispatch({
          type: ActionType.SIGNUP_USER_SUCCESS,
        });
        history.push("/login");
      }
    } catch (e) {
      dispatch({
        type: ActionType.SIGNUP_USER_ERROR,
        payload: e.response.statusText,
      });
    }
  };
};

// Action creator for login
export const loginUser = (credentials: UserLoginRequest) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.LOGIN_REQUEST,
    });
    try {
      const { data, status } = await AuthService.LoginUser(credentials);
      if (status === 200) {
        dispatch({
          type: ActionType.LOGIN_SUCCESS,
          payload: data,
        });
        history.push("/");
      }
    } catch (e) {
      dispatch({
        type: ActionType.LOGIN_ERROR,
        payload: e.response.statusText,
      });
    }
  };
};

// Action creator logging out user and clearing local storage.
export const logout = (dispatch: Dispatch<Action>) => {
  dispatch({ type: ActionType.LOGOUT });
  localStorage.removeItem("user");
  history.push("/");
};

// Action creator for search airport
export const searchForAirports = (searchString: string) => {
  return async (dispatch: Dispatch<Action>) => {
    // Dispatch search started action
    dispatch({
      type: ActionType.SEARCH_FOR_AIRPORTS,
    });
    try {
      const { data, status } = await airportService.searchForAirports(
        searchString
      );
      // If ok, return airports and dispatch success
      if (status === 200) {
        dispatch({
          type: ActionType.SEARCH_FOR_AIRPORTS_SUCCESS,
          payload: data,
        });
      } else {
        // If not status 200, dispatch error.
        dispatch({
          type: ActionType.SEARCH_FOR_AIRPORTS_ERROR,
        });
      }
    } catch (e) {
      console.log(e);
      dispatch({
        type: ActionType.SEARCH_FOR_AIRPORTS_ERROR,
      });
    }
  };
};

// Action creator for fetching all airport lists for logged in user.
export const getAirportListsForUser = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.GET_AIRPORT_LISTS,
    });

    try {
      const { status, data } = await airportService.getAirportLists();
      if (status === 200) {
        dispatch({
          type: ActionType.GET_AIRPORT_LISTS_SUCCESS,
          payload: data,
        });
      } else {
        history.push("/login");
        dispatch({
          type: ActionType.GET_AIRPORT_LISTS_ERROR,
        });
      }
    } catch (e) {
      dispatch({
        type: ActionType.GET_AIRPORT_LISTS_ERROR,
      });
    }
  };
};

// Action creator for selecting airport list.
export const selectAirportList = (airportList: AirportList) => {
  return {
    type: ActionType.SELECT_AIRPORT_LIST,
    payload: airportList,
  };
};

// Delete airport from list
export const deleteAirportFromAirportList = (
  airportList: AirportList,
  airportToDelete: Airport
) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.DELETE_AIRPORT_FROM_AIRPORTLIST,
    });

    try {
      const { data, status } = await airportService.deleteAirportFromList(
        airportList,
        airportToDelete
      );
      if (status === 200) {
        dispatch({
          type: ActionType.DELETE_AIRPORT_FROM_AIRPORTLIST_SUCCESS,
          payload: data,
        });
      } else {
        dispatch({
          type: ActionType.DELETE_AIRPORT_FROM_AIRPORTLIST_ERROR,
        });
      }
    } catch (e) {
      console.log(e);
      dispatch({
        type: ActionType.DELETE_AIRPORT_FROM_AIRPORTLIST_ERROR,
      });
    }
  };
};

// Add airport to list
export const addAirportToAirportList = (
  airportToAdd: Airport,
  airportList: AirportList
) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.ADD_AIRPORT_TO_AIRPORTSLIST,
    });

    try {
      const { data, status } = await airportService.addAirportToList(
        airportToAdd,
        airportList
      );
      if (status === 200) {
        dispatch({
          type: ActionType.ADD_AIRPORT_TO_AIRPORTLIST_SUCCESS,
          payload: data,
        });
      } else {
        dispatch({
          type: ActionType.ADD_AIRPORT_TO_AIRPORTLIST_ERROR,
        });
      }
    } catch (e) {
      console.log(e.response);
      dispatch({
        type: ActionType.ADD_AIRPORT_TO_AIRPORTLIST_ERROR,
      });
    }
  };
};
