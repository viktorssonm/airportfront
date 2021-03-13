import axios from "axios";
import { ActionType } from "../actions";
import { Dispatch } from "redux";
import { Action } from "../actions";
import { Airport, AirportList } from "../airports/types";

export const searchForAirports = (searchString: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_FOR_AIRPORTS,
      payload: searchString,
    });

    try {
      const { data, status } = await axios.get(
        "https://localhost:5001/api/airport/search",
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            Authorization:
              "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJhYTEyYmRmOS1iZmQ1LTQyNDUtOGVlZC04NmI2ZDUxMjM0N2MiLCJlbWFpbCI6Im1hZ251c0B0ZXN0LnNlIiwibmJmIjoxNjE1MjI3NjI1LCJleHAiOjE2MTU4MzI0MjUsImlhdCI6MTYxNTIyNzYyNX0.5jpPnQOQJGRtX3v6I9jy2b_H0J8BAM6hH-JHbo2XU9TWaeGR0yG7e1J9r4v_idvJEtaa_PNTkt893B8C6TWsIQ",
          },
          params: {
            SearchTerm: searchString,
          },
        }
      );
      if (status === 200) {
        dispatch({
          type: ActionType.SEARCH_FOR_AIRPORTS_SUCCESS,
          payload: data,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
};

export const getAirportListsForUser = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.GET_AIRPORT_LISTS,
      payload: "userId",
    });

    try {
      const { data, status } = await axios.get(
        "https://localhost:5001/api/airportlists/lists",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJhYTEyYmRmOS1iZmQ1LTQyNDUtOGVlZC04NmI2ZDUxMjM0N2MiLCJlbWFpbCI6Im1hZ251c0B0ZXN0LnNlIiwibmJmIjoxNjE1MjI3NjI1LCJleHAiOjE2MTU4MzI0MjUsImlhdCI6MTYxNTIyNzYyNX0.5jpPnQOQJGRtX3v6I9jy2b_H0J8BAM6hH-JHbo2XU9TWaeGR0yG7e1J9r4v_idvJEtaa_PNTkt893B8C6TWsIQ",
          },
        }
      );

      if (status === 200) {
        dispatch({
          type: ActionType.GET_AIRPORT_LISTS_SUCCESS,
          payload: data,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
};

export const selectAirportList = (airportList: AirportList) => {
  return {
    type: ActionType.SELECT_AIRPORT_LIST,
    payload: airportList,
  };
};

export const addAirportToAirportList = (
  airportToAdd: Airport,
  airportList: AirportList
) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.ADD_AIRPORT_TO_AIRPORTSLIST,
      payload: airportToAdd,
    });

    try {
      const response = await axios.post(
        "https://localhost:5001/api/airportlists/addairport",
        {
          Id: airportList.id,
          AirportIdent: airportToAdd.ident,
        },
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJhYTEyYmRmOS1iZmQ1LTQyNDUtOGVlZC04NmI2ZDUxMjM0N2MiLCJlbWFpbCI6Im1hZ251c0B0ZXN0LnNlIiwibmJmIjoxNjE1Mzc2MjQ1LCJleHAiOjE2MTU5ODEwNDUsImlhdCI6MTYxNTM3NjI0NX0.NB92S_uer7BTOWmedkHjQFhfBG-5Ip0AIcmGKclF1MpleyNwkiKHlGx3s3HrJ4EA7r8UVVFCW_1z-WJ1lTwNdg",
          },
        }
      );

      console.log(response);
    } catch (e) {
      console.log(e.response);
    }
  };
};
