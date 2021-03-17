import axios from "axios";
import { ActionType } from "../actions";
import { Dispatch } from "redux";
import { Action } from "../actions";
import { Airport, AirportList } from "../airports/types";

// Action creator for search airport
export const searchForAirports = (searchString: string) => {
  return async (dispatch: Dispatch<Action>) => {
    // Dispatch search started action
    dispatch({
      type: ActionType.SEARCH_FOR_AIRPORTS,
    });

    // Call API with AXIOS.
    try {
      const { data, status } = await axios.get(
        "https://localhost:5001/api/airport/search",
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            Authorization:
              "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJhYTEyYmRmOS1iZmQ1LTQyNDUtOGVlZC04NmI2ZDUxMjM0N2MiLCJlbWFpbCI6Im1hZ251c0B0ZXN0LnNlIiwibmJmIjoxNjE2MDEzNDMxLCJleHAiOjE2MTY2MTgyMzEsImlhdCI6MTYxNjAxMzQzMX0.tqM4RFm3tIR_at4xj9GJXarQfQZLS_fyioHwaEinTAg39n0HjDoi0jWfBvbWAPzkqc4-EPKbbmG_U-wT-kLTyA",
          },
          params: {
            SearchTerm: searchString,
          },
        }
      );
      // IF ok, return airports and dispatch success
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

export const getAirportListsForUser = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.GET_AIRPORT_LISTS,
    });

    try {
      const { data, status } = await axios.get(
        "https://localhost:5001/api/airportlists/lists",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJhYTEyYmRmOS1iZmQ1LTQyNDUtOGVlZC04NmI2ZDUxMjM0N2MiLCJlbWFpbCI6Im1hZ251c0B0ZXN0LnNlIiwibmJmIjoxNjE2MDEzNDMxLCJleHAiOjE2MTY2MTgyMzEsImlhdCI6MTYxNjAxMzQzMX0.tqM4RFm3tIR_at4xj9GJXarQfQZLS_fyioHwaEinTAg39n0HjDoi0jWfBvbWAPzkqc4-EPKbbmG_U-wT-kLTyA",
          },
        }
      );

      if (status === 200) {
        dispatch({
          type: ActionType.GET_AIRPORT_LISTS_SUCCESS,
          payload: data,
        });
      } else {
        dispatch({
          type: ActionType.GET_AIRPORT_LISTS_ERROR,
        });
      }
    } catch (e) {
      console.log(e);
      dispatch({
        type: ActionType.GET_AIRPORT_LISTS_ERROR,
      });
    }
  };
};

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
    // Dispatch action to indicate start of action.
    dispatch({
      type: ActionType.DELETE_AIRPORT_FROM_AIRPORTLIST,
    });

    try {
      const { data, status } = await axios.delete(
        "https://localhost:5001/api/airportlists/deleteairport",
        {
          data: {
            Id: airportList.id,
            AirportIdent: airportToDelete.ident,
          },
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJhYTEyYmRmOS1iZmQ1LTQyNDUtOGVlZC04NmI2ZDUxMjM0N2MiLCJlbWFpbCI6Im1hZ251c0B0ZXN0LnNlIiwibmJmIjoxNjE2MDEzNDMxLCJleHAiOjE2MTY2MTgyMzEsImlhdCI6MTYxNjAxMzQzMX0.tqM4RFm3tIR_at4xj9GJXarQfQZLS_fyioHwaEinTAg39n0HjDoi0jWfBvbWAPzkqc4-EPKbbmG_U-wT-kLTyA",
          },
        }
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
      const { data, status } = await axios.post(
        "https://localhost:5001/api/airportlists/addairport",
        {
          Id: airportList.id,
          AirportIdent: airportToAdd.ident,
        },
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJhYTEyYmRmOS1iZmQ1LTQyNDUtOGVlZC04NmI2ZDUxMjM0N2MiLCJlbWFpbCI6Im1hZ251c0B0ZXN0LnNlIiwibmJmIjoxNjE2MDEzNDMxLCJleHAiOjE2MTY2MTgyMzEsImlhdCI6MTYxNjAxMzQzMX0.tqM4RFm3tIR_at4xj9GJXarQfQZLS_fyioHwaEinTAg39n0HjDoi0jWfBvbWAPzkqc4-EPKbbmG_U-wT-kLTyA",
          },
        }
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
